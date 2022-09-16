using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Model.Metrics.Dto
{
   public  class ReprocessDataGrid
    {
        public int Index { get; set; }
        public string InOuboxId { get; set; }
        public string CustomerId { get; set; }
        public string YearQuarter { get; set; }
        public string Note { get; set; }
    }
    public class MTImportResult
    {
        public string ExceptionMess { get; set; }
        public int Result { get; set; }
    }
}
