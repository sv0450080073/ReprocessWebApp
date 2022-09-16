using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Hosting;
using TrackingErrorHelper;

namespace Reprocess.Common.Helpers
{
    public class ErrorCodeHelper
    {
        public const string ERROR_CODE_PREFIX = "INS-";
        public class TransSetCode
        {
            public const string Login = "LOG";
            public const string User = "USR";
            public const string Dashboard = "DAS";
            public const string Metrics = "MET";
            public const string DiConnect = "DIC";
            public const string ACK = "855";
            public const string ASN = "856";
            public const string CATALOG = "832";
            public const string INVOICE = "810";
            public const string PAYMENT = "820";
            public const string RETURN = "180";
            public const string ORDER = "850";
            public const string Worklist = "WOL";
            public const string SUPPLIER = "SUP";
            public const string COMMON = "COM";
            public const string EXPORT = "EXP";
            public const string INVENTORY = "846";
            public const string REPORT = "REP";
            public const string Facility = "FAT";
            public const string Permission = "PMS";
        }
        public static void QueueBackgroundErrorProcess(string ErrorCode, string ErrorMessage, int Customer,
            DateTime? ProcessingStartTimeUtc, string TransId = "")
        {
            if (GlobalSettings.GetUseErrorCatching())
            {
                HostingEnvironment.QueueBackgroundWorkItem(cancellationToken => LogErrorProcess(ErrorCode, ErrorMessage, Customer,
                ProcessingStartTimeUtc, TransId));
            }
        }
        public static void QueueBackgroundErrorProcessException(string ErrorCode, string Action, Exception ex, int Customer,
            DateTime? ProcessingStartTimeUtc, string TransId = "")
        {
            if (GlobalSettings.GetUseErrorCatching())
            {
                string ErrorMessage = GetMessageException(Action, ex);
                HostingEnvironment.QueueBackgroundWorkItem(cancellationToken => LogErrorProcess(ErrorCode, ErrorMessage, Customer,
                ProcessingStartTimeUtc, TransId));
            }
        }
        private static void LogErrorProcess(string ErrorCode, string ErrorMessage, int Customer,
            DateTime? ProcessingStartTimeUtc, string TransId = "")
        {
            try
            {
                TrackingError tracking = new TrackingError();
                ProcessingErrorInfo error = new ProcessingErrorInfo();
                //error.Id = Guid.NewGuid();
                error.TransactionKey = Guid.Parse("AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA");
                error.ProductIntegrationId = GlobalSettings.GetProductIntegrationId();
                error.ProcessingStartTimeUtc = ProcessingStartTimeUtc ?? DateTime.Now.ToUniversalTime();
                error.ProcessingErrorTimeUtc = DateTime.Now.ToUniversalTime();
                error.YearQuarter = Convert.ToInt32(Quarter.GetQuarter(DateTime.UtcNow));
                error.FromCustomerId = Customer;
                error.TransSetId = TransId ?? ""; //max length 6 
                error.InboxIds = "";
                error.OutboxIds = "";
                error.ProductInternalKey = "Reprocess";
                error.ErrorCode = CreateErrorCode(ErrorCode);
                error.ErrorMessage = ErrorMessage;
                error.EnvironmentID = GlobalSettings.GetEnvironmentID();
                tracking.LogProcessingError(error);
            }
            catch (Exception e)
            {
                LogHelper.Error(e.GetType(), e.Message, e);
            }
        }

        private static string GetMessageException(string Action, Exception ex)
        {
            try
            {
                return string.Format("Call function: {0} with error detail: {1}", Action, ex.Message.Length > 400 ? ex.Message.Substring(0, 400) + "..." : ex.Message);
            }
            catch (Exception e)
            {
                return string.Format("Call function: {0} with error detail: {1}", Action, ex.ToString().Length > 400 ? ex.ToString().Substring(0, 400) + "..." : ex.ToString());
            }
        }

        private static string CreateErrorCode(string ErrorCode)
        {
            return ERROR_CODE_PREFIX + ErrorCode;
        }
    }
}
