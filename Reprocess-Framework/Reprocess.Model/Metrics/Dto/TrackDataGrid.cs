using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Model.Metrics.Dto
{
   public class TrackDataGrid
    {
        public int Index { get; set; }
        public bool IsChecked { get; set; }
        public string InOutboxId { get; set; } = "";
        public string TransactionType { get; set; } = "";
        public string IntergrationStatus { get; set; } = "";
        public string FileName { get; set; }
        public string Note { get; set; } = "";
        public string ServiceLink { get; set; }
        public int Ids { get; set; }
        public string FilePath { get; set; } = "";
        public string CustomerId { get; set; } = "";
        public string YearQuarter { get; set; } = "";
        public string Trans { get; set; } = "";
        public string SenderId { get; set; } = "";
        public string ReceiverId { get; set; } = "";
        public int TrackingProcessId { get; set; } 
        public DateTime Created { get; set; }
        public string DateShow
        {
            get
            {
                return Created.ToString("yyyy-MM-dd HH:mm:ss");
            }
        }
        public FlowData FlowCombbData { get; set; } = new FlowData();

    }
}
