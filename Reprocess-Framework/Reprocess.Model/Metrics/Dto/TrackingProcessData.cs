using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Model.Metrics.Dto
{
   public  class TrackingProcessData
    {
        public int Id { get; set; }
        public string ServiceLink { get; set; }
        public string AllParams { get; set; }
        public string YearQuarter { get; set; }
        public bool IsInbox { get; set; }
        public int Status { get; set; }
        public int MetricsFlow { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
