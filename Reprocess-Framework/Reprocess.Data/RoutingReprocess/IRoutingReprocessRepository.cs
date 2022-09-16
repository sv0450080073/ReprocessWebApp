using Reprocess.Common;
using Reprocess.Common.Helpers;
using Reprocess.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Data.RoutingReprocess
{
    public interface IRoutingReprocessRepository
    {
        bool LoadInboxOutboxInfo(ParamInfo p);
    }
    public class RoutingReprocessRepository : IRoutingReprocessRepository
    {
        public bool LoadInboxOutboxInfo(ParamInfo p)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            try
            {
                using (var mainASCIIConn = new SqlConnection(Constants.MainConnectionString))
                using (var cmd = mainASCIIConn.CreateCommand())
                {
                    string sql = @"select userid, custid, trans_id, doc_type from " + p.Table + " where inboxid = " + p.Ids.First();

                    if (p.Table.StartsWith("outbox"))
                        sql = @"select userid, custid, trans_id, doc_type from " + p.Table + " where outboxid = " + p.Ids.First();

                    cmd.CommandText = sql;

                    mainASCIIConn.Open();

                    using (var rdr = cmd.ExecuteReader(CommandBehavior.SingleRow))
                    {
                        if (!rdr.HasRows || !rdr.Read())
                            return false;

                        p.CustUser = rdr.GetString(0).Trim();
                        p.Custid = rdr.GetInt32(1).ToString();
                        p.TransID = rdr.GetString(2).Trim();
                        p.DocType = rdr.GetString(3).Trim();

                        cmd.Cancel();
                        rdr.Close();
                    }
                }
            }
            catch(Exception ex)
            {
                ErrorCodeHelper.QueueBackgroundErrorProcessException("37", "LoadInboxOutboxInfo", ex, -1, startProcessDate, "Re4");
            }
            

            return true;
        }
    }
}
