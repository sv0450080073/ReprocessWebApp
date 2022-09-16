using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Model
{
    public class ParamInfo
    {
        public string Table { get; set; }
        public List<long> Ids { get; set; }
        public string DocType { get; set; }
        public string Custid { get; set; }
        public string CustUser { get; set; }
        public string TransID { get; set; }
        public int Qrt { get; set; }
        public int Year { get; set; }

        public ParamInfo()
        {
            Ids = new List<long>();
        }
    }
}
