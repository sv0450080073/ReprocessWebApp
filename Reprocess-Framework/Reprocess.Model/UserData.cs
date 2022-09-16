using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Model
{
   public class UserData    
    {
        public int Id { get; set; }
        public int Index { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FullName { get; set; } = "";
        public string PhoneNumber { get; set; } = "";
        public string Email { get; set; } = "";
        public string IpAddress { get; set; }
        public string Browser { get; set; }
        public string Token { get; set; }
        public bool IsActive { get; set; }
        public string PageDefault { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModitifiDate { get; set; }
        public long? TotalRows { get; set; }
        public string UserNameCompare
        {
            get
            {
                if (UserName != null && !string.IsNullOrEmpty(UserName))
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
