using Reprocess.Common;
using Reprocess.Model.Role;
using Reprocess.Service.RoleService;
using Reprocess.Web.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Reprocess.Web.Controllers
{
    
    public class RoleController : Controller
    {
        private readonly RoleService _roleService;
        
        public RoleController(RoleService roleService)
        {
            _roleService = roleService;
        }
        // GET: Role
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public JsonResult GetRoles()
        {
            try
            {
                var roles = Enum.GetNames(typeof(EmployeeRoleEnum));
                var result = new List<RoleData>(); //_roleService.GetRoles();
                for(int i = 0; i < roles.Length; i++)
                {
                    var item = new RoleData()
                    {
                        Id = i+1,
                        Index = i+1,
                        Role = roles[i],
                        Description = roles[i]
                    };
                    result.Add(item);
                }
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        [HttpPost]
        public JsonResult InsertRole(RoleData item)
        {
            try
            {
                var result = _roleService.InsertRole(item);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [HttpPost]
        public JsonResult UpdateRole(RoleData item)
        {
            try
            {
                var result = _roleService.UpdateRole(item);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [HttpGet]
        public JsonResult GetRoleById(int id)
        {
            try
            {
                var result = _roleService.GetRoleById(id);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [HttpGet]
        public JsonResult IsExistRoleInDb(string roleName)
        {
            try
            {
                var result = _roleService.IsExistRoleInDb(roleName);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                throw;
            }
        }
    }


}
