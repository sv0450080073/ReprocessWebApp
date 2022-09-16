using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Model.Metrics.Dto
{
    public class TrackSearchDataParams
    {
        public FlowData FlowCombbData { get; set; } = new FlowData();
        public List<TrackSearchDatas> TrackSearchDatas { get; set; } = new List<TrackSearchDatas>();
        public bool IsReprocess { get; set; }
    }
    public class TrackSearchData
    {
        public int Index { get; set; }
        public int FlowId { get; set; }
        public string PTransKeyIdIndex { get; set; }
        public string PInboxIdIndex { get; set; }
        public string POutboxIdIndex { get; set; }
        public string PYearQuaterIdIndex { get; set; }
        public string PFromCustIdIndex { get; set; }
        public string PToCustIdIndex { get; set; }
        public string PTransactionIdIndex { get; set; }
        public string PVersionIndex { get; set; }
        public string PCodePage { get; set; }
        public string Item08 { get; set; }
        public string Item09 { get; set; }
        public string Item10 { get; set; }
        public string EndItem { get; set; }
        public string Extension { get; set; }
        public bool IsReprocess { get; set; }
        public string ServiceLink { get; set; } = "";
        public int Ids { get; set; } = 0;

        public string Files
        {
            get
            {
                return $"{PTransKeyIdIndex ?? ""}_{POutboxIdIndex ?? ""}_{PYearQuaterIdIndex ?? ""}_" +
                    $"{PFromCustIdIndex ?? ""}_{PToCustIdIndex ?? ""}_{PTransactionIdIndex ?? ""}_{PVersionIndex ?? ""}_" +
                    $"{PCodePage ?? ""}_{Item08 ?? ""}_{Item09 ?? ""}_{Item10 ?? ""}";
            }
        }
    }
    public class FlowData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsInbox { get; set; }
        public int FlowInOutabox { get; set; }
        public int Year { get; set; }
        public int Quarter { get; set; }
        public string YearQuarter
        {
            get
            {
                return string.Format("{0:D4}{1:D2}", Year, Quarter);
            }
        }
    }
    public class TrackSearchDatas
    {
        public int Index { get; set; } = 0;
        public int Year { get; set; } = 0;
        public int Quarter { get; set; } = 0;
        public int InOutBoxId { get; set; } = 0;
        public bool IsInbox { get; set; } = false;
        public bool IsReprocess { get; set; }
        public string ServiceLink { get; set; } = "";
        public int Ids { get; set; } = 0;

        public string YearQuarter
        {
            get
            {
                return string.Format("{0:D4}{1:D2}", Year, Quarter);
            }
        }
    }
    public  class ProductIntegrationData
    {
        public string Status { get; set; }
        public DateTime Created { get; set; }
        public string Note { get; set; }
    }
}
