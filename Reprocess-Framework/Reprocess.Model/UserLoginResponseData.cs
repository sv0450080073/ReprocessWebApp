using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Model
{
    public  class UserLoginResponseData
    {
        public string UserName { get; set; }
        public bool IsSucces { get; set; }
        public string UrlReturn { get; set; }
        public int IsAuthenticate { get; set; }
        public string ErrorMSG { get; set; }
        public string Token { get; set; }

    }
}
