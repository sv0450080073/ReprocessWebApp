using Reprocess.Service.ErrorCode;
using Reprocess.Web.Filters;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Reprocess.Web.Controllers
{
    [AuthorizeRole(1,1, "User")]
    public class ErrorCodeController : BaseController
    {
        private readonly IErrorCodeService errorCodeService;
        public ErrorCodeController(IErrorCodeService _errorCodeService)
        {
            this.errorCodeService = _errorCodeService;
        }
        // GET: ErrorCode
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public JsonResult GetErrors(int currentPage,int pageSize)
        {
            var productIntegrationId = ConfigurationManager.AppSettings["ProductIntegrationId"];
            var result = errorCodeService.GetErrors(productIntegrationId, "Reprocess",currentPage,pageSize);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}