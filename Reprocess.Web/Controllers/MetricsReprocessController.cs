using Reprocess.Common;
using Reprocess.Model.Metrics;
using Reprocess.Model.Metrics.Dto;
using Reprocess.Service.Metrics.IService;
using Reprocess.Web.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Reprocess.Web.Controllers
{
    [Filters.AuthorizeRole(1, 1, "Metrics")]
    public class MetricsReprocessController : Controller
    {
        private readonly IReprocessService _mtService;
        public MetricsReprocessController(IReprocessService mtService)
        {
            _mtService = mtService;
        }
        // GET: MetricsReprocess
        public ActionResult Index()
        {

            return View();
        }
        [HttpPost] 
        public JsonResult MTReprocess(ReprocessSearchData reprocessSearchData)
        {
            LogHelper.Info(typeof(string), "--MT Begin MTReprocess  Controller--");
            try
            {
                if (_mtService.CheckInputReprocessData(reprocessSearchData))
                {
                    var result = _mtService.GetMTReprocessDataGrid(reprocessSearchData);
                    LogHelper.Info(typeof(string), "--MT End call MTReprocess Controller--");
                    return Json(result, JsonRequestBehavior.AllowGet);
                }
                return Json(new List<TrackSearchData>(), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), string.Format(ex.Message), ex);
                LogHelper.Info(typeof(string), "--MT End call MTReprocess Controller--");
                return Json(new List<TrackSearchData>(), JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost] 
        public JsonResult TrackStatusFiles(TrackSearchDataParams trackSearchDataParams)
        {
            LogHelper.Info(typeof(string), "--MT Begin TrackStatusFiles  Controller--");
            try
            {
                List<TrackDataGrid> result = new List<TrackDataGrid>();
                if (trackSearchDataParams.FlowCombbData != null && trackSearchDataParams.FlowCombbData?.Id > 0)
                {
                    if (trackSearchDataParams.FlowCombbData.Id == (int)Flow.CIP)
                    {
                        if (trackSearchDataParams.TrackSearchDatas != null && trackSearchDataParams.TrackSearchDatas.Any())
                        {
                            result = _mtService.GetTrackStatusDataGrid(trackSearchDataParams);
                        }
                    }
                    else
                    {
                        result = _mtService.GetTrackStatusDataGrid(trackSearchDataParams);
                    }
                    LogHelper.Info(typeof(string), "-- MT End  TrackStatusFiles Controller--");
                    return Json(result, JsonRequestBehavior.AllowGet);
                }
                return Json(new List<TrackSearchData>(), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), string.Format(ex.Message), ex);
                LogHelper.Info(typeof(string), "--MT End call TrackStatusFiles Controller--");
                return Json(new List<TrackSearchData>(), JsonRequestBehavior.AllowGet);
            }
        }
    }
}