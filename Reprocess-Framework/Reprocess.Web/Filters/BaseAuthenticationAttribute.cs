using Reprocess.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using System.Web.Http.Results;

namespace Reprocess.Web.Filters
{
    public class BaseAuthenticationAttribute : AuthorizeAttribute, IAuthenticationFilter
    {
        public bool IsBasicAuthentication { get; set; }

        public override void OnAuthorization(HttpActionContext actionContext)
        {
           // LogHelper.Info(typeof(string), "--API : Start OnAuthorization");
            var headers = actionContext.Request.Headers;
            var requestScope = actionContext.Request.GetDependencyScope();
            //var userService = requestScope.GetService(typeof(IUserService)) as IUserService;
            //var _userServices = DependencyResolver.Current.GetService<IUserService>();
            //var isSameInstance = object.ReferenceEquals(_userService, _userServices);// see NinjectConfig .InRequestScope()
            //var isSameInstance2 = object.ReferenceEquals(_userService, _userService2);
            //var isSameInstance3 = object.ReferenceEquals(_userServices, _userServices2);
            if (IsBasicAuthentication)
            {
                //LogHelper.Info(typeof(string), "--API : IsBasicAuthentication");
                // Gets header parameters  
                if (headers.Authorization != null)
                {
                    string authenticationString = headers.Authorization.Parameter;
                    string originalString = Encoding.UTF8.GetString(Convert.FromBase64String(authenticationString));
                    // Gets username and password  
                    string UserName = "";
                    string Password = "";
                    if (!string.IsNullOrEmpty(originalString))
                    {
                        var arrAuthetication = originalString.Split(new char[] { ':' }, 2);//allow password contain ':' character
                        UserName = arrAuthetication[0];
                        Password = arrAuthetication[1];
                    }

                    //var clientSideSalt = string.Format("{0}#dicentral.com", UserName.ToLowerInvariant());
                    //var HmacSHA512 = HashHelper.HMACSHA512Hash(Password, clientSideSalt, 1);
                    //var HasData = new HashDataAuthentication();
                    //HasData.UserName = UserName;
                    //HasData.Password = Password;
                    //HasData.HmacSHA512 = HmacSHA512;
                    //var checkUser = userService.CheckAuthenticationPublicAPI(HasData);
                    //if (GlobalSettings.GetUserAPI().Equals(UserName) && GlobalSettings.GetPasswordAPI().Equals(Password))
                    //{
                    //    LogHelper.Info(typeof(string), "--API : Authorized success");
                    //    var principal = new GenericPrincipal(new GenericIdentity(UserName), null);
                    //    Thread.CurrentPrincipal = principal;
                    //    return;
                    //}
                    //else
                    //{
                    //    HandleUnauthorized(actionContext);
                    //}
                }
                else
                {
                    //    LogHelper.Info(typeof(string), "--API 401: Unauthorized");
                    //    actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
                    //    actionContext.Response.Headers.Add("WWW-Authenticate", "Basic Scheme='Data' location = 'http://host.domain:");
                    //}
                }
            }
            //else
            //{
            //    // Allow Anonymous Attribute
            //    var anonActionAttributes = actionContext.ActionDescriptor
            //        .GetCustomAttributes<AllowAnonymousAttribute>(true);
            //    var anonControllerAttributes = actionContext.ActionDescriptor.ControllerDescriptor
            //        .GetCustomAttributes<AllowAnonymousAttribute>(true);
            //    if (anonActionAttributes.Count > 0 || anonControllerAttributes.Count > 0)
            //        return;

            //    string UserId = string.Empty;
            //    string IpAddress = string.Empty;
            //    string Browser = string.Empty;

            //    // Gets username and password  
            //    string authenticationString = headers.Authorization?.Parameter;
            //    bool tokenValidate = JWTHelper.ValidateToken(authenticationString, ref UserId, ref IpAddress, ref Browser);
            //    if (!tokenValidate)
            //    {
            //        HandleUnauthorized(actionContext);
            //    }

            //    // check user online
            //    var isValid = userService.CheckUserOnline(UserId, IpAddress, Browser);
            //    if (isValid)
            //    {
            //        LogHelper.Info(typeof(string), "--API : Authorized success");
            //        var principal = new GenericPrincipal(new GenericIdentity(UserId), null);
            //        Thread.CurrentPrincipal = principal;
            //        return;
            //    }
            //    else
            //    {
            //        HandleNotLogin(actionContext);
            //    }
            //}
            //LogHelper.Info(typeof(string), "--API : Start OnAuthorization");
        }


        private static void HandleUnauthorized(HttpActionContext actionContext)
        {
           // actionContext.Response = new HttpResponseMessage((HttpStatusCode)401) { ReasonPhrase = "Unauthorized user" };
            //LogHelper.Info(typeof(string), "--API invalid_grant: Unauthorized user");
            //var viewResult = new JsonResult();
            //viewResult.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            //viewResult.Data = (new { code = "invalid_grant", description = "Unauthorized user." });
            //actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized, viewResult, JsonMediaTypeFormatter.DefaultMediaType);
            //actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
            //actionContext.Response.Headers.Add("WWW-Authenticate", "Basic Scheme='Data' location = 'http://host.domain:");
            //actionContext.Response = new HttpResponseMessage((HttpStatusCode)401) { ReasonPhrase = "invalid_grant: Unauthorized user" };
            //actionContext.Response = actionContext.Request.CreateResponse("invalid_grant: Unauthorized user");
        }
        private static void HandleNotLogin(HttpActionContext actionContext)
        {
            //actionContext.Response = new HttpResponseMessage((HttpStatusCode)401) { ReasonPhrase = "Unauthorized user" };
           // LogHelper.Info(typeof(string), "--API : Unauthorized user");
            //var viewResult = new JsonResult();
            //viewResult.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            //viewResult.Data = (new { code = "invalid_login", description = "UnLogined user." });
            //actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized, viewResult,JsonMediaTypeFormatter.DefaultMediaType);
            //actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
            //actionContext.Response.Headers.Add("WWW-Authenticate", "Basic Scheme='Data' location = 'http://host.domain:");
            //actionContext.Response = new HttpResponseMessage((HttpStatusCode)401) { ReasonPhrase = "invalid_grant: Unauthorized user" };
        }

        public async Task AuthenticateAsync(HttpAuthenticationContext context, CancellationToken cancellationToken)
        {
            string authenParamter = string.Empty;
            HttpRequestMessage request = context.Request;
            AuthenticationHeaderValue authoriation = request.Headers.Authorization;
            if(authoriation == null)
            {
                context.ErrorResult = new AuthenticationFailureResult("Missing authorization",request);
                return;
            }    
            if(authoriation.Scheme  != "Bearer")
            {
                context.ErrorResult = new AuthenticationFailureResult("Invalid authorization", request);
                return;
            }
            if(string.IsNullOrEmpty(authoriation.Parameter))
            {
                context.ErrorResult = new AuthenticationFailureResult("Missing Token", request);
                return;
            }

            context.Principal = JWTHelper.GetPrincipal(authoriation.Parameter);
        }

        public async Task ChallengeAsync(HttpAuthenticationChallengeContext context, CancellationToken cancellationToken)
        {
            var result = await context.Result.ExecuteAsync(cancellationToken);
            if(result.StatusCode == HttpStatusCode.Unauthorized)
            {
                result.Headers.WwwAuthenticate.Add(new AuthenticationHeaderValue("Basic", "Test"));
            }
            context.Result = new ResponseMessageResult(result);
        }
        public class AuthenticationFailureResult : IHttpActionResult
        {
            public string ReasonPhrase;
         public   HttpRequestMessage Request { get; set; }
            public AuthenticationFailureResult(string reasonPhrase , HttpRequestMessage request)
            {
                ReasonPhrase = reasonPhrase;
                Request = request;
            }
        public  Task<HttpResponseMessage> ExecuteAsync(CancellationToken cancellationToken)
            {
                return Task.FromResult(Excute());
            }
            public HttpResponseMessage Excute()
            {
                HttpResponseMessage responseMessage =new HttpResponseMessage(HttpStatusCode.Unauthorized);
                responseMessage.RequestMessage = Request;
                responseMessage.ReasonPhrase = ReasonPhrase;
                return responseMessage; 
            }

        }
    }
}