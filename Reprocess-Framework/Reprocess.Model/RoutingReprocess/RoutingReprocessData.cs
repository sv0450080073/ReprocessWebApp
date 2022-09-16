using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Model.RoutingReprocess
{
    public class RoutingReprocessData
    {
        public string ProcessingType { get; set; } = "";
        public int Year { get; set; }
        public int Quarter { get; set; }
        public string IDs { get; set; } = "";
        public int Bundle { get; set; }
        public int Interval { get; set; }
        public string ErrorMessage { get; set; } = "";
        public string Message { get; set; } = "";
    }
}
