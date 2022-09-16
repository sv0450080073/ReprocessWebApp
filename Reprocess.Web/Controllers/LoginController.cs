using Reprocess.Common;
using Reprocess.Model;
using Reprocess.Service.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CurrentHttpContext = System.Web.HttpContext;

namespace Reprocess.Web.Controllers
{
    public class LoginController : Controller
    {
        private readonly IUserService _userService;
        public LoginController(IUserService userService)
        {
            _userService = userService;
        }
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult UserLogin(UserLoginData userLoginData)
        {
            try
            {
                #region Declare ipAddress, Browser
                string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                if (string.IsNullOrEmpty(ipAddress))
                {
                    ipAddress = Request.ServerVariables["REMOTE_ADDR"];
                }
                string Browser = Request.Browser.Browser;
                if (Browser.ToLower().Equals("chrome"))
                {
                    var userAgent = Request.UserAgent;

                    if (userAgent.IndexOf("Edg") > -1)
                    {
                        Browser = "Edg";
                    }
                    else if (userAgent.IndexOf("Safari") > -1)
                    {
                        Browser = "Safari";
                    }
                    else if (userAgent.IndexOf("IE") > -1)
                    {
                        Browser = "IE";
                    }
                }
                userLoginData.Browser = Browser;
                userLoginData.IpAddress = ipAddress;
                #endregion
                #region Test
                //check valid data
                //CurrentHttpContext.Current.Session[Constants.Session_User_AccessCode] = null;
                ////check login
                ////login success
                //var jwtoken = JWTHelper.GenerateToken("", "", "");//user.userId, user.ipAddress, accessCode.Browser);
                //var userInfo = new UserData()
                //{
                //    UserName = userLoginData.UserName,
                //    Password = userLoginData.Password,
                //    Token = "tesst",
                //    Id = userLoginData.Id
                //};
                //CurrentHttpContext.Current.Session[Constants.Session_User_AccessCode] = userInfo;
                //var result = new UserLoginResponseData()
                //{
                //    IsSucces = true,
                //    UrlReturn = "Home",
                //    Token =  "Tesst"
                //};
                #endregion
                var respone  = new UserLoginResponseData();
                CurrentHttpContext.Current.Session[Constants.Session_User_AccessCode] = null;
                var result = _userService.GetUserProfile(userLoginData);
                CurrentHttpContext.Current.Session[Constants.Session_User_AccessCode] = result;
                if (result.User.Id > 0)
                {
                    respone = new UserLoginResponseData()
                    {
                        UserName = result.User.UserName,
                        IsSucces = true,
                        UrlReturn = "/",
                        Token = result.User.Token
                    };
                }
                else
                {
                    respone = new UserLoginResponseData()
                    {
                        UserName = result.User.UserName,
                        IsSucces = false,
                        UrlReturn = "",
                        Token = result.User.Token,
                        ErrorMSG = "The Username or Password is Incorrect."
                    };
                }
                return Json(respone, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                throw;
            }
        }

    }
}