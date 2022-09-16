using Reprocess.Model.Role;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Model.User
{
    public class UserProfileData
    {
        public UserData User { get; set; } = new UserData();
        public RoleData Role { get; set; } = new RoleData();
        public List<RoleData> roles { get; set; } = new List<RoleData>();
        public string JsonRole { get; set; }
        public string RolesString
        {
            get
            {
                if (roles.Count > 0)
                {
                    return string.Join(",", roles.Select(x => x.Role).ToArray());
                }
                else
                {
                    return "";
                }
            }
        }
        public string ErrorMSG { get; set; } = "";
    }
}
