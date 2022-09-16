using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Reprocess.Common;
using Reprocess.Model.User;

namespace Reprocess.Web.Filters
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
    public class AuthorizeRoleAttribute : AuthorizeAttribute
    {
        public int FeatureLevel { get; set; }
        public int ActionLevel { get; set; }
        public string RoleLevel { get; set; } = "";
        public AuthorizeRoleAttribute(int FeatureLevel, int ActionLevel, string RoleLevel)
        {
            this.FeatureLevel = FeatureLevel;
            this.ActionLevel = ActionLevel;
            this.RoleLevel = RoleLevel;
        }
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            var role = RoleLevel;
            //roles = roles.ConvertAll(d => d.ToLower());
            var user = httpContext.Session[Constants.Session_User_AccessCode] as UserProfileData;
            /*if (user != null && user.Role.Role.ToLower() =="admin")
            {
                return true;
            }*/
            if (user != null) //todo
            {
                var userRoles = user.RolesString;
                var index = userRoles.IndexOf(role);
                if (userRoles.IndexOf(role)>=0)
                {
                    return true;
                }
            }
            return false;
        }
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            filterContext.Result = new HttpUnauthorizedResult();
        }
    }
}