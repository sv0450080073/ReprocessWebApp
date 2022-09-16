using Reprocess.Model.ErrorCode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Service.ErrorCode
{
    public interface IErrorCodeService
    {
        List<ErrorCodeModel> GetErrors(string productIntegrationId, string productInternalKey, int currentPage, int pageSize);
    }
}
