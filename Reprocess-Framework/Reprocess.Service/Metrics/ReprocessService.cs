using Reprocess.Common;
using Reprocess.Data.Metrics;
using Reprocess.Service.Metrics.IService;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Reprocess.Data;
using Reprocess.Data.Metrics.Repository;
using Reprocess.Data.Metrics.Repository.IRepository;
using Reprocess.Model.Metrics.Dto;
using System.Collections.Concurrent;
using DiMetrics.Helper;

namespace Reprocess.Service.Metrics
{
    public class ReprocessService : IReprocessService
    {
        private readonly IMetricReprocessRepository _metricReprocessRepository;
        public ReprocessService(IMetricReprocessRepository metricReprocessRepository)
        {
            _metricReprocessRepository = metricReprocessRepository;
        }

        #region TRACK CIP FILES 
        /// <summary>
        /// This method will track status file by params from client post 
        /// </summary>
        /// <param name="searchParams"></param>
        /// <returns> return List<TrackDataGrid> show grid  </returns>
        public List<TrackDataGrid> GetTrackStatusDataGrid(TrackSearchDataParams searchParams)
        {
            var cbbFlowData = searchParams.FlowCombbData;
            var trackSearchParams = searchParams.TrackSearchDatas;
            LogHelper.Info(typeof(string), "--MT Start call GetTrackStatusDataGrid from ReprocessService --");
            List<TrackDataGrid> result = new List<TrackDataGrid>();
            try
            {
                if (cbbFlowData != null && cbbFlowData.Id == (int)Flow.CIP)   //CIP
                {
                    result = HandleCIPFiles(trackSearchParams, cbbFlowData, cbbFlowData.IsInbox);
                }
                else if (cbbFlowData != null && cbbFlowData.Id == (int)Flow.EDIExtract) //EDIExtract
                {
                    result = HandleEDIExtractFiles(cbbFlowData);
                }
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call GetTrackStatusDataGrid from ReprocessService--");
            }

            if (trackSearchParams != null && trackSearchParams.Count > 0 && !trackSearchParams.FirstOrDefault().IsReprocess)
            {
                foreach (var (item, index) in result.Select((value, i) => (value, i)))
                {
                    item.Index = index + 1;
                }
            }
            LogHelper.Info(typeof(string), "--MT End call GetTrackStatusDataGrid from ReprocessService--");
            return result;

        }
        /// <summary>
        /// This method handle CIP flow :
        /// Check status file  Inbox,Oubox on ProductIntegration DB 
        /// </summary>
        /// <param name="trackDatas"> List inbox, outbox are posted by client </param>
        /// <param name="cbbData"> Combobox Flow Data </param>
        /// <param name="isInbox"> Isinbox : true , false </param>
        /// <returns>return List<TrackDataGrid> to show grid </returns>
        public List<TrackDataGrid> HandleCIPFiles(List<TrackSearchDatas> trackDatas, FlowData cbbData, bool isInbox = false)
        {
            LogHelper.Info(typeof(string), "--MT Start call HandleCIPFiles from ReprocessService--");
            List<TrackDataGrid> trackDataGridList = new List<TrackDataGrid>();
            try
            {
                if (trackDatas.Any())
                {
                    foreach (var item in trackDatas)
                    {
                        LogHelper.Info(typeof(string), "--MT HandleCIPFiles: " + item.InOutBoxId + " " + isInbox + " -- ");
                        TrackDataGrid trackDataGridItem = new TrackDataGrid();
                        var productIntegration = GetProductIntegrationData(item.YearQuarter, item.InOutBoxId, isInbox);
                        if (productIntegration != null && productIntegration.Status != null)
                        {
                            trackDataGridList.Add(FillTrackData(item.Index, item.InOutBoxId, productIntegration.Status, productIntegration.Note, item.YearQuarter, productIntegration.Created, cbbData));
                        }
                    }
                }
                else
                {
                    LogHelper.Info(typeof(string), "--MT Called HandleCIPFiles from ReprocessService but datas null --");
                }
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call HandleCIPFiles from ReprocessService--");
            }
            LogHelper.Info(typeof(string), "--MT End call HandleCIPFiles from ReprocessService--");
            return trackDataGridList;
        }
        /// <summary>
        /// This method get status of inbox or out file on ProductIntegration DB .
        /// Step 01: Get status (MT_1, MT_2) inbox, out file
        /// Step 02: Get note, status  base on status at step 01 
        /// 
        /// </summary>
        /// <param name="yearQuarter"> ex: 202202 </param>
        /// <param name="inboxOutboxID"> id inbox or outbox </param>
        /// <param name="isInBox">true, false</param>
        /// <returns> return ProductIntegrationData  </returns>
        public ProductIntegrationData GetProductIntegrationData(string yearQuarter, int inOutboxID, bool isInBox = false)
        {
            ProductIntegrationData productIntergration = new ProductIntegrationData();
            try
            {
                LogHelper.Info(typeof(string), "--MT Start call GetProductIntegrationData from ReprocessService--");
                productIntergration = _metricReprocessRepository.GetIntegrationStatus(yearQuarter, inOutboxID, isInBox);
                if (productIntergration != null)
                {
                    productIntergration.Note = GetIntegrationNote(productIntergration.Status);
                    productIntergration.Status = GetIntegrationStatus(productIntergration.Status);
                }
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call GetProductIntegrationData from ReprocessService--");
            }
            LogHelper.Info(typeof(string), "--MT End call GetProductIntegrationData from ReprocessService--");
            return productIntergration;
        }
        /// <summary>
        ///  This method will parse status  (MT_1,MT_2) to fail ,... 
        /// </summary>
        /// <param name="status"> ex :(MT_1,MT_2) </param>
        /// <returns> return string value  show grid</returns>
        public string GetIntegrationStatus(string status)
        {
            switch (status)
            {
                case null:
                    return "Not exist";
                case "MT_5":
                    return "Fail";
                case "MT_4":
                    return "Processing";
                case "MT_3":
                    return "Success";
                case "MT_2":
                    return "Invalid";
                case "MT_1":
                    return "Pass";
                case "MT_0":
                    return "Hold";
                case "MT_8":
                    return "Importing";
            }
            return "Unknown";
        }
        /// <summary>
        /// This method will parse from status (MT_1,MT_2) to note : not exist, ...
        /// </summary>
        /// <param name="status">ex :(MT_1,MT_2) </param>
        /// <returns> return string value to show grid </returns>
        public string GetIntegrationNote(string status)
        {
            switch (status)
            {
                case null:
                    return "Not exist";
                case "MT_5":
                    return "DiConnect cannot call DiMetrics by some reason such as service die, network die...";
                case "MT_4":
                    return "import data unsuccessfully because DiUnite import data from DiASCIIR9 database to DiMetrics database fail";
                case "MT_3":
                    return "DiMetrics imports data successfully and there is not on-hold metric";
                case "MT_2":
                    return "exception occurred in DiMetrics system such as DiUnite link is wrong, etc ... or imported file name is in wrong format";
                case "MT_1":
                    return "DiMetrics imports data successfully and data do not violate on-hold metric";
                case "MT_0":
                    return "data violate on-hold metric";
                case "MT_8":
                    return "Data is import into Queue table but not import to Dimetric";
            }
            return "Unknown";
        }

        /// <summary>
        /// This method will create  new instance TrackDataGrid  object and fill data to property object
        /// </summary>
        /// <param name="index"></param>
        /// <param name="inOutboxId"></param>
        /// <param name="intergrationStatus"></param>
        /// <param name="note"></param>
        /// <param name="yearQuarter"></param>
        /// <param name="created"></param>
        /// <param name="cbbData"></param>
        /// <returns>return object data </returns>
        public TrackDataGrid FillTrackData(int index, int inOutboxId, string intergrationStatus, string note, string yearQuarter, DateTime created, FlowData cbbData)
        {
            TrackDataGrid result = new TrackDataGrid();
            result.Index = index;
            result.InOutboxId = inOutboxId.ToString();
            result.IntergrationStatus = intergrationStatus ?? "";
            result.Note = note ?? "";
            result.IsChecked = false;
            result.YearQuarter = yearQuarter ?? "";
            result.Created = created;
            result.FlowCombbData = cbbData;
            return result;
        }
        #endregion
   
        #region TRACK EDI EXTRACT FILE
        /// <summary>
        /// This method handle EDI_EXTRACT File
        /// Step 01: Get all files have status = 4 of tracking process table on MetricsLog DB
        /// Step 02: Distinct files have AllParams field the same
        /// Step 03: Parse List<TrackingProcessData> to  List<TrackDataGrid> 
        /// </summary>
        /// <param name="cbbData">Flow Combobox data</param>
        /// <returns>return List<TrackDataGrid> show grid</returns>
        public List<TrackDataGrid> HandleEDIExtractFiles(FlowData cbbData)
        {
            LogHelper.Info(typeof(string), "--MT Start call HandleEDIExtractFiles from ReprocessService--");
            List<TrackDataGrid> trackDataGridList = new List<TrackDataGrid>();
            try
            {
                List<TrackingProcessData> trackingProcessDatas = _metricReprocessRepository.GetEDI_ExtractFile(cbbData);
                var notMatchAllParams = DeleteItemMatchAllParams(trackingProcessDatas);
                if (notMatchAllParams != null && notMatchAllParams.Any())
                {
                    trackDataGridList = GetTrackDataGridFromTrackingProcess(notMatchAllParams, cbbData);
                }
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call HandleEDIExtractFiles from ReprocessService--");
            }
            LogHelper.Info(typeof(string), "--MT End call HandleEDIExtractFiles from ReprocessService--");
            return trackDataGridList;
        }
        /// <summary>
        /// This method handle files have AllParam field the same and get top 1 order by create date
        /// </summary>
        /// <param name="data">List<TrackingProcessData> </param>
        /// <returns>return List<TrackingProcessData> </returns>
        public List<TrackingProcessData> DeleteItemMatchAllParams(List<TrackingProcessData> data)
        {
            LogHelper.Info(typeof(string), "--MT Start call DeleteItemMatchAllParams from ReprocessService--");
            List<TrackingProcessData> result = new List<TrackingProcessData>();
            var matchAllParams = new List<TrackingProcessData>();
            try
            {
                if (data != null)
                {
                    foreach (var item in data)
                    {
                        if (!string.IsNullOrEmpty(item.AllParams))
                        {
                            matchAllParams = data.Where(x => x.AllParams.Trim() == item.AllParams.Trim()
                                                             && x.YearQuarter == item.YearQuarter
                                                            ).ToList();

                            if (matchAllParams != null && matchAllParams.Count > 0)
                            {
                                if (matchAllParams.Count > 1)
                                {
                                    matchAllParams = matchAllParams.OrderBy(x => x.CreatedDate).ToList();
                                    var lastedItem = matchAllParams.LastOrDefault();
                                    if (!result.Select(x => x.AllParams).Contains(lastedItem.AllParams))
                                    {
                                        result.Add(lastedItem);
                                    }

                                }
                                else
                                {
                                    if (!result.Select(x => x.AllParams).Contains(item.AllParams))
                                    {
                                        result.Add(matchAllParams.FirstOrDefault());
                                    }

                                }
                            }

                        }
                    }

                }
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call DeleteItemMatchAllParams from ReprocessService--");
            }
            LogHelper.Info(typeof(string), "--MT End call DeleteItemMatchAllParams from ReprocessService--");
            return result;
        }
        /// <summary>
        /// Method will parse from TrackingProcessData object to TrackDataGrid object
        /// </summary>
        /// <param name="trackingData">TrackingProcessData oject </param>
        /// <param name="cbbData">Flow combobox data on screen </param>
        /// <returns>return List<TrackDataGrid> show grid </returns>
        public List<TrackDataGrid> GetTrackDataGridFromTrackingProcess(List<TrackingProcessData> trackingData, FlowData cbbData)
        {
            List<TrackDataGrid> result = new List<TrackDataGrid>();
            try
            {
                if (trackingData != null && trackingData.Any())
                {
                    foreach (var item in trackingData)
                    {
                        result.Add(FillTrackDataGrid(item, cbbData));
                    }
                }

            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call GetTrackDataGridFromTrackingProcess from ReprocessService--");
            }
            return result;
        }
        /// <summary>
        ///  FillTrackDataGrid 
        /// </summary>
        /// <param name="trackingProcessItem"></param>
        /// <param name="cbbData"></param>
        /// <returns></returns>
        public TrackDataGrid FillTrackDataGrid(TrackingProcessData trackingProcessItem, FlowData cbbData)
        {
            TrackDataGrid result = new TrackDataGrid();
            try
            {
                if (!string.IsNullOrEmpty(trackingProcessItem.AllParams))
                {
                    string[] splitAllParams = trackingProcessItem.AllParams.Split(new Char[] { '=', '&' }, StringSplitOptions.RemoveEmptyEntries);
                    string inOutboxId = splitAllParams[7].Trim().ToString();
                    result.YearQuarter = cbbData.YearQuarter;
                    result.Trans = splitAllParams[1].Trim().ToString();
                    result.SenderId = splitAllParams[3].Trim().ToString();
                    result.ReceiverId = splitAllParams[5].Trim().ToString();
                    result.InOutboxId = inOutboxId;
                    result.IntergrationStatus = GetEDIExtractStatus(trackingProcessItem.Status);
                    result.Created = trackingProcessItem.CreatedDate;
                    result.Note = GetEDIExtractNote(trackingProcessItem.Status);
                    result.FlowCombbData = cbbData;
                    result.TrackingProcessId = trackingProcessItem.Id;
                }
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call FillTrackDataGrid from ReprocessService--");

            }
            return result;
        }
        public string GetEDIExtractStatus(int status)
        {
            switch (status)
            {
                case 0:
                    return "";
                case 4:
                    return "Processing";
                case 2:
                    return "Skip";
                case 3:
                    return "Success";
            }
            return "Unknown";
        }

        public string GetEDIExtractNote(int status)
        {
            switch (status)
            {
                case 0:
                    return "";
                case 4:
                    return "Processing";
                case 3:
                    return "Success";
                case 2:
                    return "Skip";
            }
            return "Unknown";
        }
        #endregion

        #region Reprocess File CIP FLOW
        /// <summary>
        /// This method will check input values from client
        /// </summary>
        /// <param name="inputItem"> param of reprocess screen </param>
        /// <returns> if input value valid return true , else return false </returns>
        public bool CheckInputReprocessData(ReprocessSearchData inputItem)
        {
            LogHelper.Info(typeof(string), "--MT Start call CheckInputReprocessData from ReprocessService--");
            bool result = false;
            try
            {
                var searchCondition = inputItem.SearchCondition;
                var trackDataGrid = inputItem.TrackDataGridNeedReprocess;
                if (!string.IsNullOrEmpty(Common.Constants.ImportServiceUrl) &&
                    !string.IsNullOrWhiteSpace(Common.Constants.ImportServiceUrl) && (trackDataGrid != null && trackDataGrid.Any())
                    && searchCondition.FlowCombbData != null)
                {
                    result = true;
                }
                else
                {
                    result = false;
                }
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call CheckInputReprocessData from ReprocessService--");
                return false;
            }
            LogHelper.Info(typeof(string), "--MT End call CheckInputReprocessData from ReprocessService--");
            return result;
        }
        /// <summary>
        /// This method will check Flow combobox is CIP Flow or EDI Flow 
        /// then Handle reprocess base on Flow Combobox 
        /// </summary>
        /// <param name="reprocessSearchData"></param>
        /// <returns>return List<ReprocessDataGrid> </returns>
        public List<ReprocessDataGrid> GetMTReprocessDataGrid(ReprocessSearchData reprocessSearchData)
        {
            var searchParams = reprocessSearchData.SearchCondition;
            List<ReprocessDataGrid> result = new List<ReprocessDataGrid>();
            LogHelper.Info(typeof(string), "--MT Start call GetMTReprocessDataGrid from ReprocessService--");
            try
            {
                if (searchParams.FlowCombbData.Id == (int)Flow.CIP) //CIP FLOW
                {
                    result = ReprocessCIPFlow(reprocessSearchData);
                }
                else if (searchParams.FlowCombbData.Id == (int)Flow.EDIExtract)//EXTRACT 
                {
                    result = ReprocessEDIExtractFlow(reprocessSearchData);
                }
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call GetMTReprocessDataGrid from ReprocessService--");
            }
            LogHelper.Info(typeof(string), "--MT End call GetMTReprocessDataGrid from ReprocessService--");
            return result;
        }
        /// <summary>
        /// This method reprocess CIP FLOW 
        /// Case 01:  IntergrationStatus =  5 Fail -> Check Valid Process 
        /// ->  Call Dimetrics Helper DLL to insert and  check rule hold or pass Then Update main, productintegration db with status is hold or pass
        /// Case 02 : IntergrationStatus = 3 success,1 pass ,0 hold  -> Update main, productintegration db with status is success
        /// Case 03: Importing, orther -> import data from main to metrics db then Update main, productintegration db with status is success
        /// </summary>
        /// <param name="reprocessSearchData"></param>
        /// <returns>return List<ReprocessDataGrid> show grid</returns>
        public List<ReprocessDataGrid> ReprocessCIPFlow(ReprocessSearchData reprocessSearchData)
        {
            LogHelper.Info(typeof(string), "--MT Start call ReprocessCIPFlow from ReprocessService--");
            var searchParams = reprocessSearchData.SearchCondition;
            var trackDataList = reprocessSearchData.TrackDataGridNeedReprocess;
            var myQueue = new ConcurrentQueue<string>();
            List<ReprocessDataGrid> result = new List<ReprocessDataGrid>();
            try
            {
                foreach (var item in trackDataList)
                {
                    ReprocessDataGrid reprocessDataGridItem = new ReprocessDataGrid();
                    if (item.IsChecked)
                    {
                        if (item.IntergrationStatus.ToLower() == Common.Constants.MT_5.ToLower()) //fail
                        {
                            string fileName = GetFileNameByInOutboxIdAndYearQuarter(Convert.ToInt32(item.InOutboxId), item.YearQuarter, item.FlowCombbData.IsInbox);
                            FileNameData fileNameData = new FileNameData();
                            if (!string.IsNullOrEmpty(fileName))
                            {
                                //get fileName
                                fileNameData = GetInfoByFileName(fileName);
                                if (fileName != null)
                                {
                                    //Check exist this tran in metric db
                                    bool isExistMetricsDB = IsExistOnDiMetrics(fileNameData.TransactionId, Convert.ToInt32(fileNameData.InOutBoxId), fileNameData.YearQuarter, fileNameData.CustomerId);
                                    if (!isExistMetricsDB)
                                    {
                                        string resultUrl = string.Empty;
                                        //this tran not has in metric -> import
                                        DiMetricsHelper metricsHelper = new DiMetricsHelper(Common.Constants.ImportServiceUrl ?? "");
                                        int statusImport = metricsHelper.ImportData(out resultUrl, "-filepath " + fileName);
                                        string note = GetImportStatus(statusImport);
                                        reprocessDataGridItem.Index = item.Index;
                                        reprocessDataGridItem.InOuboxId = item.InOutboxId ?? "";
                                        reprocessDataGridItem.CustomerId = item.CustomerId ?? "";
                                        reprocessDataGridItem.YearQuarter = item.YearQuarter ?? "";
                                        reprocessDataGridItem.Note = note;
                                        result.Add(reprocessDataGridItem);
                                        if (statusImport == Common.Constants.ResultPass || statusImport == Common.Constants.ResultSuccess || statusImport == Common.Constants.ResultHold || statusImport == Common.Constants.ResultAccepted)
                                        {
                                            UpdateIntegrationStatus(Convert.ToInt32(item.InOutboxId), item.YearQuarter, item.FlowCombbData.IsInbox, "P1_MT_" + statusImport, "MT_" + statusImport);
                                        }
                                    }
                                    else
                                    {
                                        UpdateIntegrationStatus(Convert.ToInt32(item.InOutboxId), item.YearQuarter, item.FlowCombbData.IsInbox, Common.Constants.MainIntegrationStatusSuccess, Common.Constants.ProductIntegrationStatusSuccess);
                                    }
                                }
                            }
                        }
                        else if (item.IntergrationStatus.ToLower() == Common.Constants.MT_3.ToLower() ||
                            item.IntergrationStatus.ToLower() == Common.Constants.MT_1.ToLower() ||
                             item.IntergrationStatus.ToLower() == Common.Constants.MT_0.ToLower()) //pass , success, hold Exist in metric db
                        {
                            string fileName = GetFileNameByInOutboxIdAndYearQuarter(Convert.ToInt32(item.InOutboxId), item.YearQuarter, item.FlowCombbData.IsInbox);
                            FileNameData fileNameData = new FileNameData();
                            if (!string.IsNullOrEmpty(fileName))
                            {
                                //get fileName
                                fileNameData = GetInfoByFileName(fileName);
                                if (fileName != null)
                                {
                                    //Check exist this tran in metric db
                                    bool isExistMetricsDB = IsExistOnDiMetrics(fileNameData.TransactionId, Convert.ToInt32(fileNameData.InOutBoxId), fileNameData.YearQuarter, fileNameData.CustomerId);
                                    if (isExistMetricsDB)
                                    {
                                        reprocessDataGridItem.Index = item.Index;
                                        reprocessDataGridItem.InOuboxId = item.InOutboxId ?? "";
                                        reprocessDataGridItem.CustomerId = item.CustomerId ?? "";
                                        reprocessDataGridItem.YearQuarter = item.YearQuarter ?? "";
                                        reprocessDataGridItem.Note = "Success";
                                        result.Add(reprocessDataGridItem);
                                        UpdateIntegrationStatus(Convert.ToInt32(item.InOutboxId), item.YearQuarter, item.FlowCombbData.IsInbox, Common.Constants.MainIntegrationStatusSuccess, Common.Constants.ProductIntegrationStatusSuccess);

                                    }
                                    else
                                    {
                                        var mtImportResult = GetStatusImportFile(item);
                                        reprocessDataGridItem.Index = item.Index;
                                        reprocessDataGridItem.InOuboxId = item.InOutboxId ?? "";
                                        reprocessDataGridItem.CustomerId = item.CustomerId ?? "";
                                        reprocessDataGridItem.YearQuarter = item.YearQuarter ?? "";
                                        reprocessDataGridItem.Note = mtImportResult.ExceptionMess ?? "";
                                        if (mtImportResult.Result == Common.Constants.ResultPass || mtImportResult.Result == Common.Constants.ResultSuccess || mtImportResult.Result == Common.Constants.ResultHold || mtImportResult.Result == Common.Constants.ResultAccepted)
                                        {
                                            UpdateIntegrationStatus(Convert.ToInt32(item.InOutboxId), item.YearQuarter, item.FlowCombbData.IsInbox, Common.Constants.MainIntegrationStatusSuccess, Common.Constants.ProductIntegrationStatusSuccess);
                                        }
                                    }
                                }
                            }
                        }
                        else // Not Exist in db Metrics
                        {
                            if (searchParams.IsImportMetric)
                            {
                                var mtImportResult = GetStatusImportFile(item);
                                reprocessDataGridItem.Index = item.Index;
                                reprocessDataGridItem.InOuboxId = item.InOutboxId ?? "";
                                reprocessDataGridItem.CustomerId = item.CustomerId ?? "";
                                reprocessDataGridItem.YearQuarter = item.YearQuarter ?? "";
                                reprocessDataGridItem.Note = mtImportResult.ExceptionMess ?? "";
                                result.Add(reprocessDataGridItem);
                                if (mtImportResult.Result == Common.Constants.ResultPass || mtImportResult.Result == Common.Constants.ResultSuccess || mtImportResult.Result == Common.Constants.ResultHold || mtImportResult.Result == Common.Constants.ResultAccepted)
                                {
                                    UpdateIntegrationStatus(Convert.ToInt32(item.InOutboxId), item.YearQuarter, item.FlowCombbData.IsInbox, Common.Constants.MainIntegrationStatusSuccess, Common.Constants.ProductIntegrationStatusSuccess);
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call ReprocessCIPFlow from ReprocessService--");
            }
            LogHelper.Info(typeof(string), "--MT End call ReprocessCIPFlow from ReprocessService--");
            return result;
        }
        /// <summary>
        /// Method get fileName by inbox id or oubox id and yearquarter 
        /// </summary>
        /// <param name="inOutboxID"></param>
        /// <param name="yearQuarter"></param>
        /// <param name="isInbox"></param>
        /// <returns> if fileName exist :  return fileName else return null </returns>
        public string GetFileNameByInOutboxIdAndYearQuarter(int inOutboxID, string yearQuarter, bool isInbox)
        {
            return _metricReprocessRepository.GetFileNameByInOutboxIdAndYearQuarter(inOutboxID, yearQuarter, isInbox);
        }
        /// <summary>
        /// Check tran exist on Metrics DB
        /// </summary>
        /// <param name="transactionType"></param>
        /// <param name="inoutboxID"></param>
        /// <param name="yearQuarter"></param>
        /// <param name="hubid"></param>
        /// <returns>return true if transaction exist else return false </returns>
        public bool IsExistOnDiMetrics(string transactionType, int inoutboxID, string yearQuarter, string hubid = "")
        {
            return _metricReprocessRepository.IsExistOnDiMetrics(transactionType, inoutboxID, yearQuarter, hubid);
        }

        public FileNameData GetInfoByFileName(string fileName)
        {
            FileNameData result = new FileNameData();
            string[] parameters = Path.GetFileNameWithoutExtension(fileName).Split('_');
            result.YearQuarter = parameters[Common.Constants.PYearQuaterIdIndex];
            result.TransactionId = parameters[Common.Constants.PTransactionIdIndex];
            //transKey = parameters[Common.Constants.PTransKeyIdIndex];
            if (parameters.Length >= Common.Constants.PArgsIndexMaxLength)
            {
                if (parameters[parameters.Length - 1].ToLower() == Common.Constants.PInbox)
                {
                    result.InOutBoxId = parameters[Common.Constants.PInboxIdIndex];
                    result.CustomerId = parameters[Common.Constants.PToCustIdIndex];
                    result.ParticipantId = parameters[Common.Constants.PFromCustIdIndex];
                    if (Common.Constants.PVersionIndex < parameters.Length)
                        result.Version = parameters[Common.Constants.PVersionIndex];
                    if (Common.Constants.PCodePage < parameters.Length)
                        result.CodePage = parameters[Common.Constants.PCodePage];
                }
                else if (parameters[parameters.Length - 1].ToLower() == Common.Constants.POutbox)
                {
                    result.InOutBoxId = parameters[Common.Constants.POutboxIdIndex];
                    result.CustomerId = parameters[Common.Constants.PFromCustIdIndex];
                    result.ParticipantId = parameters[Common.Constants.PToCustIdIndex];
                    if (Common.Constants.PVersionIndex < parameters.Length)
                        result.Version = parameters[Common.Constants.PVersionIndex];
                    if (Common.Constants.PCodePage < parameters.Length)
                        result.CodePage = parameters[Common.Constants.PCodePage];
                }
                return result;
            }
            return null;
        }        
        public string GetImportStatus(int status)
        {
            string resultMessage = string.Empty;
            switch (status)
            {
                case Common.Constants.ResultPass:
                    resultMessage = "Success";
                    break;
                case Common.Constants.ResultSuccess:
                    resultMessage = "Success";
                    break;
                case Common.Constants.ResultProcessing:
                    resultMessage = "Fail";
                    break;
                case Common.Constants.ResultHold:
                    resultMessage = "Success";
                    break;
                case Common.Constants.ResultAccepted:
                    resultMessage = "Success";
                    break;
                case Common.Constants.ResultIgnore:
                    resultMessage = "Fail";
                    break;
                case Common.Constants.ResultImporting:
                    resultMessage = "Importing";
                    break;
            }
            return resultMessage;
        }

        /// <summary>
        /// This method will update status main and productintegration db
        /// </summary>
        /// <param name="inOutboxId"></param>
        /// <param name="yearQuarter"></param>
        /// <param name="isInbox"></param>
        /// <param name="mainStatus"></param>
        /// <param name="productIntergrationStatus"></param>
        public void UpdateIntegrationStatus(int inOutboxId, string yearQuarter, bool isInbox, string mainStatus, string productIntergrationStatus)
        {
            LogHelper.Info(typeof(string), "--MT Start call UpdateIntegrationStatus from ReprocessService--");
            try
            {
                if (!string.IsNullOrEmpty(mainStatus) && !string.IsNullOrEmpty(yearQuarter))
                {
                    _metricReprocessRepository.UpdateMainIntegrationStatus(inOutboxId, yearQuarter, mainStatus, isInbox);
                    _metricReprocessRepository.UpdateProductIntegrationStatus(inOutboxId, yearQuarter, productIntergrationStatus, isInbox);
                }
                else
                {
                    LogHelper.Info(typeof(string), "--MT  UpdateIntegrationStatus from ReprocessService status or year is Null With " + inOutboxId + " --- ");
                }
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call UpdateIntegrationStatus from ReprocessService--");
            }
            LogHelper.Info(typeof(string), "--MT End call UpdateIntegrationStatus from ReprocessService--");
        }

        /// <summary>
        /// This method will handle reprocess with file status is importing
        /// Step 01: Get file name by inoutbox id , yearquater
        /// Step 02: Import File from R9 Db to metrics Db
        /// Step 03: Parse status to string show grids
        /// </summary>
        /// <param name="trackDataGrid"></param>
        /// <returns> return MTImportResult object  </returns>
        public MTImportResult GetStatusImportFile(TrackDataGrid trackDataGrid)
        {
            LogHelper.Info(typeof(string), "--MT Start call GetStatusImportFile from ReprocessService--");
            MTImportResult mTImportResult = new MTImportResult();
            try
            {
                string fileName = GetFileNameByInOutboxIdAndYearQuarter(Convert.ToInt32(trackDataGrid.InOutboxId), trackDataGrid.YearQuarter, trackDataGrid.FlowCombbData.IsInbox);
                if (!string.IsNullOrEmpty(fileName))
                {
                    //to do get file path 
                    string exception = null;
                    int result = ImportFile(fileName, out exception);
                    string resultMessage = string.Empty;
                    resultMessage = GetImportStatus(result);
                    if (!string.IsNullOrEmpty(exception))
                        resultMessage += ". " + exception;
                    mTImportResult.Result = result;
                    mTImportResult.ExceptionMess = resultMessage;
                }
                else
                {
                    mTImportResult.Result = 10;
                    mTImportResult.ExceptionMess = " File Name not exist ! ";
                }
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call GetStatusImportFile from ReprocessService--");
            }
            LogHelper.Info(typeof(string), "--MT End call GetStatusImportFile from ReprocessService--");
            return mTImportResult;
        }
        public int ImportFile(string fileName, out string exception)
        {
            return _metricReprocessRepository.ImportFile(fileName, out exception);
        }
        #endregion

        #region Reprocess File EDI Extract Flow 
        /// <summary>
        /// This method handle reprocess file EDI Extract Flow 
        /// Step 01: Spit AllParams then import transaction from R9_rep DB to metrics Db
        /// Step 02: Get Note by import status 
        /// Step 03: Update status = 3 on tracking_process table MetricsLog Db
        /// </summary>
        /// <param name="reprocessSearchData"></param>
        /// <returns> return List<ReprocessDataGrid></returns>
        public List<ReprocessDataGrid> ReprocessEDIExtractFlow(ReprocessSearchData reprocessSearchData)
        {
            LogHelper.Info(typeof(string), "--MT Start call ReprocessEDIExtractFlow from ReprocessService--");
            var searchParams = reprocessSearchData.SearchCondition;
            var trackDataList = reprocessSearchData.TrackDataGridNeedReprocess;
            List<ReprocessDataGrid> result = new List<ReprocessDataGrid>();
            string exception = string.Empty;
            string strSuccessIds = string.Empty;
            try
            {
                foreach (var item in trackDataList)
                {
                    if (!string.IsNullOrEmpty(item.InOutboxId))
                    {
                        string[] splitInOutBoxId = item.InOutboxId.Split(',');
                        for (int i = 0; i < splitInOutBoxId.Length; i++)
                        {
                            if (!string.IsNullOrEmpty(splitInOutBoxId[i]))
                            {
                                ReprocessDataGrid reprocessDataGridItem = new ReprocessDataGrid();
                                int importStatus = _metricReprocessRepository.ImportDiASCIIR9Rep(item.Trans, item.SenderId, item.ReceiverId,
                                splitInOutBoxId[i], item.YearQuarter, item.FlowCombbData.IsInbox ? "Y" : "N", out exception);
                                string resultMessage = GetProcessEDIExtractNote(importStatus);
                                if (!string.IsNullOrEmpty(exception))
                                {
                                    resultMessage += ". " + exception;
                                }
                                reprocessDataGridItem.Index = item.Index;
                                reprocessDataGridItem.InOuboxId = item.InOutboxId ?? "";
                                reprocessDataGridItem.CustomerId = item.CustomerId ?? "";
                                reprocessDataGridItem.YearQuarter = item.YearQuarter ?? "";
                                reprocessDataGridItem.Note = resultMessage ?? "";
                                result.Add(reprocessDataGridItem);
                            }
                        }
                    }
                    strSuccessIds += (string.IsNullOrEmpty(strSuccessIds) ? item.TrackingProcessId.ToString() : (", " + item.TrackingProcessId.ToString()));
                    if (!string.IsNullOrEmpty(strSuccessIds))
                    {
                        _metricReprocessRepository.UpdateTrackingProcessStatus(strSuccessIds, "3");
                    }
                }
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call ReprocessEDIExtractFlow from ReprocessService--");
            }
            LogHelper.Info(typeof(string), "--MT End call ReprocessEDIExtractFlow from ReprocessService--");               
            return result;
        }
        public string GetProcessEDIExtractNote(int status)
        {
            string resultMessage = string.Empty;
            switch (status)
            {
                case Common.Constants.ResultPass:
                    resultMessage = "Success";
                    break;
                case Common.Constants.ResultSuccess:
                    resultMessage = "Success";
                    break;
                case Common.Constants.ResultProcessing:
                    resultMessage = "Fail";
                    break;
                case Common.Constants.ResultHold:
                    resultMessage = "Success";
                    break;
                case Common.Constants.ResultAccepted:
                    resultMessage = "Success";
                    break;
                case Common.Constants.ResultIgnore:
                    resultMessage = "Fail";
                    break;
                case Common.Constants.ResultImporting:
                    resultMessage = "Importing";
                    break;
            }
            return resultMessage;
        }

       
        #endregion

    }
}
