using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Model.ErrorCode
{
    public class ErrorCodeModel
    {
        public Guid Id { get; set; }
        public Guid TransactionKey { get; set; }
        public int ProductIntegrationId { get; set; }
        public DateTime ProcessingStartTimeUtc { get; set; }
        public DateTime ProcessingErrorTimeUtc { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime CreatedTimeUtc { get; set; }
        public Guid? EDIRowId { get; set; }
        public long? ServerFileId { get; set; }
        public int? FileTransferUserId { get; set; }
        public int? FromCustomerId { get; set; }
        public int? ToCustomerId { get; set; }
        public int? YearQuarter { get; set; }
        public string TransSetId { get; set; }
        public string InboxIds { get; set; }
        public string OutboxIds { get; set; }
        public string ProductInternalKey { get; set; }
        public string ErrorCode { get; set; }
        public string ErrorMessage { get; set; }
        public string EnvironmentID { get; set; }
        public long? TotalRows { get; set; }
        public int? RowsNumber { get; set; }
    }
}
