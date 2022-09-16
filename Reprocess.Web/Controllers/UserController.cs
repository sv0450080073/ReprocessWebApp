using Newtonsoft.Json;
using Reprocess.Model;
using Reprocess.Model.Role;
using Reprocess.Model.User;
using Reprocess.Service.Users;
using Reprocess.Web.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Reprocess.Web.Controllers
{
    [Filters.AuthorizeRole(1,1, "User")]
    public class UserController : BaseController
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [AuthorizeRole(1,1, "User")]
        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        [AuthorizeRole(1,1, "User")]
        [HttpGet]
        public JsonResult GetUsers(int currentPage, int pageSize, string username)
        {
            try
            {
               var result =  _userService.GetUsers(currentPage,pageSize,username);
               return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [AuthorizeRole(1,1, "User")]
        [HttpPost]
        public JsonResult InsertUser(UserProfileData item)
        {
            try
            {
                var result = _userService.InsertUser(item);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [HttpPost]
        public JsonResult UpdateUser(UserProfileData item)
        {
            try
            {
                var roles = JsonConvert.DeserializeObject<List<RoleData>>(item.JsonRole);
                item.roles = new List<RoleData>();
                item.roles.AddRange(roles);
                var result = _userService.UpdateUser(item);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [HttpGet]
        public JsonResult GetUserById(int id)
        {
            try
            {
                var result = _userService.GetUserById(id);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [HttpGet]
        public JsonResult IsExistUserInDb(string userName , string email, bool isCheckUserName)
        {
            try
            {
                var result = _userService.IsExistUserInDb(userName, email, isCheckUserName);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                throw;
            }
        }
      
        [HttpPost]
        public JsonResult ActiveUser(UserData data)
        {
            try
            {
                var result = _userService.ActiveUser(data);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                throw;
            }
        }


    }
}