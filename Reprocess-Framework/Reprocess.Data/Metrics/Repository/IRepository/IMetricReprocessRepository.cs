using Reprocess.Model.Metrics.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Data.Metrics.Repository.IRepository
{
    public interface IMetricReprocessRepository
    {
        string GetIntegrationStatusInbox(string yearQuarter, string inboxID, string customerID);
        string GetIntegrationStatusOutbox(string yearQuarter, string outboxID, string  customerID);
        bool IsExistOnDiASCIIR9ByInbox(string inboxID, string docType, string yearQuarter);
        bool IsExistOnDiASCIIR9ByInbox_Chanel(string inboxID, string docType, string yearQuarter);
        bool IsExistOnDiMetrics(string transactionType, int inoutboxID, string yearQuarter, string hubid = "");
        bool IsExistOnDiASCIIR9ByOutbox(string outboxID, string docType, string yearQuarter);
        bool IsExistOnDiASCIIR9ByOutbox_Chanel(string outboxID, string docType, string yearQuarter);
        int ImportFile(string fileName, out string exception);
        void UpdateIntegrationStatusInbox(string inboxID, string customerID, string yearQuarter, string integrationStatus = "P1_MT_3");
        void UpdateIntegrationStatusOutbox(string outboxID, string customerID, string yearQuarter, string integrationStatus = "P1_MT_3");
        List<TrackingProcessData> GetEDI_ExtractFile(FlowData FlowCombbData);
        int ImportDiASCIIR9Rep(string transactionId, string customerId, string participantId, string inoutboxID, string yearQuater, string isInbox, out string exception);
        void UpdateTrackingProcessStatus(string successIds, string status);

        ProductIntegrationData GetIntegrationStatus(string yearQuarter, int inOutboxID, bool isInbox = false);
        string GetFileNameByInOutboxIdAndYearQuarter(int inOutboxId, string yearQuarter, bool isInbox);
        void UpdateProductIntegrationStatus(int inOutboxID, string yearQuarter, string integrationStatus, bool isInbox);
        void UpdateMainIntegrationStatus(int inOutboxID, string yearQuarter, string integrationStatus, bool isInbox);
    }
}
