using Microsoft.ApplicationBlocks.Data;
using Reprocess.Common;
using Reprocess.Common.Helpers;
using Reprocess.Model.Role;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Data.RoleRepository
{
    public interface IRoleRepository
    {
        List<RoleData> GetRoleByUserId(int userId);
        bool DeteteUserById(int id);
        RoleData GetRoleById(int id);
        List<RoleData> GetRoles();
        bool UpdateRole(RoleData item);
        bool InsertRole(RoleData item);
        bool IsExistRoleInDb(string roleName);
    }
    public class RoleRepository : IRoleRepository
    {
        #region Login


        public List<RoleData> GetRoleByUserId(int userId)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            var result = new List<RoleData>();
            LogHelper.Info(typeof(string), "--MT Start call GetRolesByUserId from RoleRepository--");
            string commandText = " SELECT UR.emp_role_id FROM employees AS U with (nolock) JOIN " +
                " employee_roles AS UR with (nolock) ON U.emp_id = UR.emp_id " +
                " WHERE U.emp_id = @userId ";
            DataSet ds;
            SqlParameter[] param = new SqlParameter[2];
            param[0] = new SqlParameter("@userId", SqlDbType.Int);
            param[0].Value = userId;
            try
            {
                ds = SqlHelper.ExecuteDataset(Constants.MainConnectionString, CommandType.Text, commandText, param);
                if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    DataTable dtb = ds.Tables[0];
                    for (int i = 0; i < dtb.Rows.Count; i++)
                    {
                        result.Add(FillRoleData(dtb.Rows[i]));
                    }
                }
            }
            catch (Exception ex)
            {
                ds = new DataSet();
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call GetRolesByUserId from RoleRepository--");
                ErrorCodeHelper.QueueBackgroundErrorProcessException("12", "GetRoleByUserId", ex, -1, startProcessDate, "Re2");
            }
            LogHelper.Info(typeof(string), "--MT End call GetRolesByUserId from RoleRepository--");
            return result;
        }

        public RoleData FillRoleData(DataRow dataRow)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            RoleData result = new RoleData();
            try
            {
                result.Id = Convert.ToInt32(dataRow["emp_role_id"]);
                result.Role = Enum.GetName(typeof(EmployeeRoleEnum), result.Id);
                //result.Description = Convert.ToString(dataRow["Description"]);
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), string.Format(ex.Message), ex);
                ErrorCodeHelper.QueueBackgroundErrorProcessException("13", "FillRoleData", ex, -1, startProcessDate, "Re2");
            }
            return result;
        }
        #endregion
        #region Role CRUD
        public bool DeteteUserById(int id)
        {
            throw new NotImplementedException();
        }

        public RoleData GetRoleById(int id)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            RoleData result = new RoleData();
            try
            {
                if (id > 0)
                {
                    string commandText = "SELECT * FROM ROLES with(nolock) WHERE [Id] = " + id;

                    DataSet ds = new DataSet();
                    ds = SqlHelper.ExecuteDataset(Constants.DiMetricsConnectionString, CommandType.Text, commandText);
                    if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                    {
                        for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                        {
                            result = FillRoleData(ds.Tables[0].Rows[i]);
                        }
                    }
                    //foreach (var (item, index) in result.Select((value, i) => (value, i)))
                    //{
                    //    item.Index = index + 1;
                    //}
                }
            }
            catch (Exception ex)
            {
                ErrorCodeHelper.QueueBackgroundErrorProcessException("14", "GetRoleById", ex, -1, startProcessDate, "Re2");
            }
            
            return result;

        }

        public List<RoleData> GetRoles()
        {
            DateTime startProcessDate = DateTime.UtcNow;
            List<RoleData> result = new List<RoleData>();
            try
            {
                string commandText = "SELECT * FROM ROLES with(nolock)  ";
                DataSet ds = new DataSet();
                ds = SqlHelper.ExecuteDataset(Constants.DiMetricsConnectionString, CommandType.Text, commandText);
                if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                    {
                        RoleData obj = new RoleData();
                        obj = FillRoleData(ds.Tables[0].Rows[i]);
                        result.Add(obj);
                    }
                }
                foreach (var (item, index) in result.Select((value, i) => (value, i)))
                {
                    item.Index = index + 1;
                }
            }
            catch (Exception ex)
            {
                ErrorCodeHelper.QueueBackgroundErrorProcessException("15", "GetRoles", ex, -1, startProcessDate, "Re2");
            }
            
            
            return result;
        }

        public bool UpdateRole(RoleData item)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            if (item.Id > 0)
            {
                //todo check role item 
                string cmdTextRole = string.Format("UPDATE ROLES SET [ROLE] = '{0}' ,[Description] = '{1}' WHERE [Id]={2}", item.Role, item.Description, item.Id);
                try
                {
                    SqlHelper.ExecuteNonQuery(Constants.DiMetricsConnectionString, CommandType.Text, cmdTextRole);
                    return true;
                }
                catch (Exception ex)
                {
                    ErrorCodeHelper.QueueBackgroundErrorProcessException("16", "UpdateRole", ex, -1, startProcessDate, "Re2");
                    return false;
                }
            }
            else
            {
                return false;
            }

        }

        public bool InsertRole(RoleData item)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            try
            {
                string commandText = "INSERT INTO ROLES(Role, Description ) " +
                 $" VALUES(N'{item.Role}', '{item.Description}')";
                SqlHelper.ExecuteNonQuery(Constants.DiMetricsConnectionString, CommandType.Text, commandText);
                return true;
            }
            catch (Exception ex)
            {
                ErrorCodeHelper.QueueBackgroundErrorProcessException("17", "InsertRole", ex, -1, startProcessDate, "Re2");
                return false;
            }
        }

        public bool IsExistRoleInDb(string roleName)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            try
            {
                string commandText = string.Format("SELECT * FROM ROLES with(nolock) WHERE ROLE  = '{0}' ", roleName.ToLower());
                DataSet ds = new DataSet();
                ds = SqlHelper.ExecuteDataset(Constants.DiMetricsConnectionString, CommandType.Text, commandText);
                if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                ErrorCodeHelper.QueueBackgroundErrorProcessException("18", "IsExistRoleInDb", ex, -1, startProcessDate, "Re2");
                return false;
            }
        }
        #endregion
    }
}
