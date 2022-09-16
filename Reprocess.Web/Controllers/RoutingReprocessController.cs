using Reprocess.Model.RoutingReprocess;
using Reprocess.Service.RoutingReprocess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Reprocess.Web.Controllers
{
    [Filters.AuthorizeRole(1,1, "DiConnect")]
    public class RoutingReprocessController : BaseController
    {
        private readonly IRoutingReprocessService _rtReprocessService;
        public RoutingReprocessController(IRoutingReprocessService rtReprocessService)
        {
            _rtReprocessService = rtReprocessService;
        }
        public ActionResult Index()
        {
            return View();
            //return View(new RoutingReprocessData());
        }
        [HttpPost]
        public ActionResult Index(RoutingReprocessData data)
        {
            var result = _rtReprocessService.ExecuteProcess(data);
            return Json(result);
        }
    }
}