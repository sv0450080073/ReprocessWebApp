using Reprocess.Model.ErrorCode;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Data.ErrorCode
{
    public interface IErrorCodeRepository
    {
        List<ErrorCodeModel> GetErrors(string productIntegrationId,string productInternalKey, int currentPage, int pageSize);
        ErrorCodeModel FillRoleData(DataRow dataRow);
    }
}
