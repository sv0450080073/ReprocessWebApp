using Reprocess.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using CurrentHttpContext = System.Web.HttpContext;
namespace Reprocess.Web.Controllers
{
    public class BaseController : Controller
    {
        protected override void Initialize(RequestContext requestContext)
        {
            base.Initialize(requestContext);
        }
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (CurrentHttpContext.Current.Session[Constants.Session_User_AccessCode] == null)
            {
                var url = Url.Action("Index", "Login");
                filterContext.Result = new RedirectResult(url);
                Session.RemoveAll();
                //ExpireAllCookies();
                return;
                #region Check Cookies


                ////HttpCookie userCookie = Request.Cookies[Constants.Session_User_AccessCode];
                //if (userCookie != null && !string.IsNullOrEmpty(userCookie[Constants.Session_User_AccessCode]))
                //{
                //    //IUserProfileModel user = JsonConvert.DeserializeObject<UserProfileModel>(userCookie[GlobalSettings.Cookies_UserData]);
                //    var url = Url.Action("Index", "Login");
                //    filterContext.Result = new RedirectResult(url);
                //    Session.RemoveAll();
                //    //ExpireAllCookies();
                //    return;
                //}
                //else
                //{
                //    var url = Url.Action("Index", "Login");
                //    filterContext.Result = new RedirectResult(url);
                //    Session.RemoveAll();
                //    //ExpireAllCookies();
                //    return;
                //}
                #endregion
            }
           
        }

        public ActionResult LogOut()
        {
            Session.RemoveAll();
            return RedirectToAction("Index", "Login");
        }
    }
}