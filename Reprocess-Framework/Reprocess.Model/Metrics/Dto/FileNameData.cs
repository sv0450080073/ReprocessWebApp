using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Model.Metrics.Dto
{
    public class FileNameData
    {
        public string InOutBoxId { get; set; }
        public string TransactionId { get; set; }
        public string CustomerId {get;set;}
        public string YearQuarter { get; set; }
        public string ParticipantId { get; set; }
        public string Version { get; set; }
        public string CodePage { get; set; }
    }
}
