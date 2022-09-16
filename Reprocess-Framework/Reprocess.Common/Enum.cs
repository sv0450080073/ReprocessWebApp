using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Common
{
   public  enum Flow
    {
        CIP = 1,
        EDIExtract = 2
    }
    public enum ProcessingType
    {
        Download = 1,
        Upload = 2,
        SendOutboundDocument = 3,
        DownloadInboundDocument = 4,
        DiWebUpload = 5,
        DownloadOutboundDocument = 6,
        DownloadACKDocument = 7,
        PreAddin = 8,
        PostAddin = 9,
        PostAddinRepostProcess = 10,
        DownloadInboundDocumentToDiASCIIR9 = 11,
        DownloadOutboundDocumentToDiASCIIR9 = 12,
        DownloadInboundDocumentToDiMetrics = 13,
        DownloadOutboundDocumentToDiMetrics = 14,
    }

    public enum RoleEnum
    {
        User = 1,
        SuperAdmin = 2,
        MetricsAdim = 3,
        DiconectAdmin = 4     
    }
    public enum EmployeeRoleEnum
    {
        User = 1,
        Metrics = 2,
        DiConnect = 3,
    }


}
