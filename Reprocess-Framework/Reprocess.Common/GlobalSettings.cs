using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Common
{
    public class GlobalSettings
    {
        public static bool GetUseErrorCatching()
        {
            var UseErrorCatching = ConfigurationManager.AppSettings.AllKeys.Contains("UseErrorCatching")
                ? Convert.ToInt32(ConfigurationManager.AppSettings["UseErrorCatching"]) == 1 ? true : false : false;
            return UseErrorCatching;
        }
        public static int GetProductIntegrationId()
        {
            var ProductIntegrationId = ConfigurationManager.AppSettings.AllKeys.Contains("ProductIntegrationId")
                ? Convert.ToInt32(ConfigurationManager.AppSettings["ProductIntegrationId"]) : 0;
            return ProductIntegrationId;
        }
        public static int GetEnvironmentID()
        {
            var EnvironmentID = ConfigurationManager.AppSettings.AllKeys.Contains("EnvironmentID")
                ? Convert.ToInt32(ConfigurationManager.AppSettings["EnvironmentID"]) : 0;
            return EnvironmentID;
        }
    }
}
