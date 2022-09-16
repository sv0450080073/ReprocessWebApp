using Reprocess.Data.RoleRepository;
using Reprocess.Model.Role;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Service.RoleService
{
    public interface IRoleService
    {
        List<RoleData> GetRoleByUserId(int userId);
        bool DeteteUserById(int id);
        RoleData GetRoleById(int id);
        List<RoleData> GetRoles();
        bool UpdateRole(RoleData item);
        bool InsertRole(RoleData item);
        bool IsExistRoleInDb(string roleName);

    }
    public class RoleService : IRoleService
    {
        private readonly IRoleRepository _roleRepository;
        public RoleService(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }

        public bool DeteteUserById(int id)
        {
            throw new NotImplementedException();
        }

        public RoleData GetRoleById(int id)
        {
            return _roleRepository.GetRoleById(id);
        }

        public List<RoleData> GetRoleByUserId(int userId)
        {
            //todo check id 
            return _roleRepository.GetRoleByUserId(userId);
        }

        public List<RoleData> GetRoles()
        {
          return   _roleRepository.GetRoles();
        }

        public bool InsertRole(RoleData item)
        {
           return  _roleRepository.InsertRole(item);
        }

        public bool IsExistRoleInDb(string roleName)
        {
            return _roleRepository.IsExistRoleInDb(roleName);
        }

        public bool UpdateRole(RoleData item)
        {
            return _roleRepository.UpdateRole(item);
        }
    }
}
