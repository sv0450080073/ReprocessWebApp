using DiCentral.DiConnect;
using log4net;
using Reprocess.Common;
using Reprocess.Data.RoutingReprocess;
using Reprocess.Model;
using Reprocess.Model.RoutingReprocess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Reprocess.Service.RoutingReprocess
{
    public interface IRoutingReprocessService
    {
        RoutingReprocessData ExecuteProcess(RoutingReprocessData data);
    }
    public class RoutingReprocessService : IRoutingReprocessService
    {
        private ProcessingType _processType;
        private static readonly ILog _log = LogManager.GetLogger(typeof(RoutingReprocessService));
        private List<ParamInfo> _params = new List<ParamInfo>();

        private readonly IRoutingReprocessRepository _routingReprocessRepository;
        public RoutingReprocessService(IRoutingReprocessRepository routingReprocessRepository)
        {
            _routingReprocessRepository = routingReprocessRepository;
        }
        public RoutingReprocessData ExecuteProcess(RoutingReprocessData data)
        {
            try
            {
                _processType = (ProcessingType)Enum.Parse(typeof(ProcessingType), data.ProcessingType);
                try
                {
                    Process(ref data);
                }
                catch (Exception ex)
                {
                    string errMsg = ex.ToString();
                    _log.Error(errMsg);
                    data.ErrorMessage = errMsg;
                }
            }
            catch (Exception ex)
            {
                _log.Error(ex.ToString());
            }
            return data;
        }
        private void Process(ref RoutingReprocessData data)
        {
            var bResult = false;
            var errorMsg = string.Empty;
            var keyParam = string.Empty;
            var paramTemplate = string.Empty;
            var count = 0;

            _log.Debug("Started: "
                + "\n - processType: " + _processType
                + "\n - ids: " + data.IDs
                + "\n - qrt: " + data.Quarter
                + "\n - year: " + data.Year
                + "\n - bundle: " + data.Bundle
                + "\n - waitTime: " + data.Interval
                );

            _params.Clear();

            var lsIds = data.IDs.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            foreach (var i in lsIds)
            {
                var id = 0;
                if (int.TryParse(i, out id))
                {
                    var item = new ParamInfo();
                    item.Ids.Add(id);
                    item.Qrt = data.Quarter;
                    item.Year = data.Year;

                    _params.Add(item);
                }
                else
                {
                    data.ErrorMessage = data.ErrorMessage + string.Format("Cannot parse id:{0}\r\n", i);
                }
            }

            switch (_processType)
            {
                case Reprocess.Common.ProcessingType.SendOutboundDocument:
                    break;
                case Reprocess.Common.ProcessingType.DownloadInboundDocument:
                case Reprocess.Common.ProcessingType.DownloadInboundDocumentToDiASCIIR9:
                case Reprocess.Common.ProcessingType.DownloadInboundDocumentToDiMetrics:
                    paramTemplate = "-tbl inbox_Qr{0}_{1} -ids {2} -docType {3} -custid {4} -custUser {5} -transID {6}";

                    foreach (var param in _params)
                    {
                        param.Table = string.Format("inbox_Qr{0}_{1}", param.Qrt, param.Year);
                        if (!_routingReprocessRepository.LoadInboxOutboxInfo(param))
                        {
                            _log.Debug("Inbox/outbox is not existed: " + param);
                            data.Message = data.Message + string.Format("Inbox/outbox is not existed with params Year:{0}, Quarter:{1}, ID:{2}\r\n", param.Year, param.Qrt, param.Ids.First());
                            continue;
                        }
                        keyParam = string.Format(paramTemplate, param.Qrt, param.Year, string.Join(",", param.Ids.ToArray()), param.DocType, param.Custid, param.CustUser, param.TransID);
                        _log.Debug("keyParam: " + keyParam);
                        bResult = new DiCentral.DiConnect.DiConnectorServerExt().ProcessExternalDoc(keyParam, (long)_processType, out errorMsg);
                        _log.Debug("Result: " + bResult);
                        _log.Debug("Response Msg: " + errorMsg);

                        data.Message = data.Message + string.Format("Process with Param: Year={0}, Quarter={1}, ID = {2}. Result: {3}\r\n", param.Year, param.Qrt, param.Ids.First(), bResult);
                        count++;

                        if (count % data.Bundle == 0 && count != _params.Count)
                        {
                            _log.Debug("Count: " + count);
                            Thread.Sleep(data.Interval * 1000);
                        }

                    }
                    break;
                case Reprocess.Common.ProcessingType.DiWebUpload:
                    break;
                case Reprocess.Common.ProcessingType.DownloadOutboundDocument:
                case Reprocess.Common.ProcessingType.DownloadOutboundDocumentToDiASCIIR9:
                case Reprocess.Common.ProcessingType.DownloadOutboundDocumentToDiMetrics:
                    paramTemplate = "-tbl outbox_Qr{0}_{1} -ids {2} -docType {3} -custid {4} -custUser {5} -transID {6} -downloadRelatedOutbox N";

                    foreach (var param in _params)
                    {
                        param.Table = string.Format("outbox_Qr{0}_{1}", param.Qrt, param.Year);

                        if (!_routingReprocessRepository.LoadInboxOutboxInfo(param))
                        {
                            _log.Debug("Inbox/outbox is not existed: " + param);
                            data.Message = data.Message + string.Format("Inbox/outbox is not existed with params Year:{0}, Quarter:{1}, ID:{2}\r\n", param.Year, param.Qrt, param.Ids.First());
                            continue;
                        }

                        keyParam = string.Format(paramTemplate, param.Qrt, param.Year, string.Join(",", param.Ids.ToArray()), param.DocType, param.Custid, param.CustUser, param.TransID);
                        _log.Debug("keyParam: " + keyParam);
                        bResult = new DiConnectorServerExt().ProcessExternalDoc(keyParam, (long)_processType, out errorMsg);
                        _log.Debug("Result: " + bResult);
                        _log.Debug("Response Msg: " + errorMsg);
                        data.Message = data.Message + string.Format("Process with Param: Year={0}, Quarter={1}, ID = {2}. Result: {3}\r\n", param.Year, param.Qrt, param.Ids.First(), bResult);
                        count++;

                        if (count % data.Bundle == 0 && count != _params.Count)
                        {
                            _log.Debug("Count: " + count);
                            Thread.Sleep(data.Interval * 1000);
                        }
                    }
                    break;
                case Reprocess.Common.ProcessingType.DownloadACKDocument:
                    break;

            }
        }
    }
}
