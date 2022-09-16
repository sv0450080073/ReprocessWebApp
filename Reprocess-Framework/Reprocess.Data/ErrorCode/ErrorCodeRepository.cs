using Microsoft.ApplicationBlocks.Data;
using Reprocess.Common;
using Reprocess.Common.Helpers;
using Reprocess.Model.ErrorCode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Data.ErrorCode
{
    public class ErrorCodeRepository : IErrorCodeRepository
    {
        public List<ErrorCodeModel> GetErrors(string productIntegrationId, string productInternalKey,int currentPage,int pageSize)
        {
            var result = new List<ErrorCodeModel>();
            try
            {
                string command = "select Id, ErrorCode, ErrorMessage, TotalRows = COUNT(*) OVER(), ROW_NUMBER() OVER(ORDER BY CreatedTimeUtc DESC) as RowsNumber from Err_ProcessingError where ProductIntegrationId=@ProductIntegrationId AND ProductInternalKey=@ProductInternalKey order by CreatedTimeUtc desc ";
                command += "OFFSET @PageSize *(@CurrentPage - 1) ROWS FETCH NEXT @PageSize ROWS ONLY;";
                DataSet ds = new DataSet();
                SqlParameter[] param = new SqlParameter[4];
                param[0] = new SqlParameter("@ProductIntegrationId", productIntegrationId);
                param[1] = new SqlParameter("@ProductInternalKey",productInternalKey);
                param[2] = new SqlParameter("@CurrentPage", currentPage);
                param[3] = new SqlParameter("@PageSize",pageSize);
                ds = SqlHelper.ExecuteDataset(Constants.DiSupportConnectionString, CommandType.Text, command, param);
                if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                    {
                        var obj = new ErrorCodeModel();
                        obj = FillRoleData(ds.Tables[0].Rows[i]);
                        result.Add(obj);
                    }
                }
            }
            catch(Exception e)
            {

            }
            return result;
        }
        public ErrorCodeModel FillRoleData(DataRow dataRow)
        {
            var result = new ErrorCodeModel();
            result.Id = Guid.Parse(dataRow["Id"].ToString());
            result.ErrorCode = dataRow["ErrorCode"].ToString();
            result.ErrorMessage = dataRow["ErrorMessage"].ToString();
            result.TotalRows = Convert.ToInt32(dataRow["TotalRows"]);
            result.RowsNumber = Convert.ToInt32(dataRow["RowsNumber"]);
            return result;
        }
    }
}
