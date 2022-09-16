using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Model
{
    public class UserLoginData
    {
        public string UserName { get; set; } = "";
        public string Password { get; set; } = "";
        public bool IsRemember { get; set; }
        public string PasswordHash { get; set; } = "";
        public string IpAddress { get; set; }
        public string Browser { get; set; }

        public string UserNameCompare
        {
            get
            {
                if(UserName != null && !string.IsNullOrEmpty(UserName))
                {
                    return UserName.Trim().ToLower();
                }
                else
                {
                    return string.Empty;
                }
            }
        }
       
    }
}
