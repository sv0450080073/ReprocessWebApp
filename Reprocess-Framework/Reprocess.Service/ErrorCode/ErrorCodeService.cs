using Reprocess.Data.ErrorCode;
using Reprocess.Model.ErrorCode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Service.ErrorCode
{
    public class ErrorCodeService : IErrorCodeService
    {
        private readonly IErrorCodeRepository errorCodeRepository;
        public ErrorCodeService(IErrorCodeRepository _errorCodeRepository)
        {
            this.errorCodeRepository = _errorCodeRepository;
        }
        public List<ErrorCodeModel> GetErrors(string productIntegrationId, string productInternalKey, int currentPage, int pageSize)
        {
            return errorCodeRepository.GetErrors(productIntegrationId, productInternalKey, currentPage, pageSize);
        }
    }
}
