using Microsoft.ApplicationBlocks.Data;
using Reprocess.Common;
using Reprocess.Common.Helpers;
using Reprocess.Common.Security;
using Reprocess.Data.RoleRepository;
using Reprocess.Model;
using Reprocess.Model.Role;
using Reprocess.Model.User;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Data.Users
{
    public interface IUserRepository
    {
        bool CheckUser(UserLoginData userLogin);
        UserData GetUserInfo(UserLoginData userLogin);
        bool InsertTokenInfo(UserData userData);
        bool DeteteUserById(int id);
        UserProfileData GetUserById(int id);
        List<UserProfileData> GetUsers(int currentPage, int pageSize, string username);
        bool UpdateUser(UserProfileData item);
        bool InsertUser(UserProfileData item);
        bool IsExistUserInDb(string userName, string email, bool isCheckUserName);
        bool ActiveUser(UserData data);
    }
    public class UserRepository : IUserRepository
    {
        private readonly IRoleRepository _roleRepository;
        public UserRepository(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }
        #region USER LOGIN
        public bool CheckUser(UserLoginData userLogin)
        {
            LogHelper.Info(typeof(string), "--MT Start call CheckUser from UserRepository--");
            DateTime startProcessDate = DateTime.UtcNow;
            string commandText = "SELECT Top 1 1 FROM employees WHERE emp_userid = @userName AND emp_password = @password";
            //userLogin.PasswordHash = MD5.MD5Hash(userLogin.UserNameCompare + userLogin.Password);
            DataSet ds;
            SqlParameter[] param = new SqlParameter[2];
            param[0] = new SqlParameter("@userName", SqlDbType.NVarChar);
            param[0].Value = userLogin.UserNameCompare;
            param[1] = new SqlParameter("@password", SqlDbType.NVarChar);
            param[1].Value = userLogin.Password;
            try
            {
                ds = SqlHelper.ExecuteDataset(Constants.MainConnectionString, CommandType.Text, commandText, param);
            }
            catch (Exception ex)
            {
                ds = new DataSet();
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call CheckUser from UserRepository--");
                ErrorCodeHelper.QueueBackgroundErrorProcessException("2", "CheckUser", ex, -1, startProcessDate, "Re1");
            }
            LogHelper.Info(typeof(string), "--MT End call CheckUser from UserRepository--");
            if (ds.Tables[0] != null)
            {
                if (ds.Tables[0].Rows.Count > 0)
                    return true;
                else
                    return false;
            }
            else
            {
                return false;
            }


        }
        public UserData GetUserInfo(UserLoginData userLogin)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            UserData result = new UserData();
            LogHelper.Info(typeof(string), "--MT Start call GetUserInfo from UserRepository--");
            string commandText = "SELECT * FROM employees WHERE emp_userid = @userName AND emp_password = @password";
            //userLogin.PasswordHash = MD5.MD5Hash(userLogin.UserNameCompare + userLogin.Password);
            DataSet ds;
            SqlParameter[] param = new SqlParameter[2];
            param[0] = new SqlParameter("@userName", SqlDbType.NVarChar);
            param[0].Value = userLogin.UserNameCompare;
            param[1] = new SqlParameter("@password", SqlDbType.NVarChar);
            param[1].Value = userLogin.Password;
            try
            {
                ds = SqlHelper.ExecuteDataset(Constants.MainConnectionString, CommandType.Text, commandText, param);
                if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    DataTable dtb = ds.Tables[0];
                    for (int i = 0; i < dtb.Rows.Count; i++)
                    {
                        result = FillUserData(dtb.Rows[i]);
                    }
                }
            }
            catch (Exception ex)
            {
                ds = new DataSet();
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                LogHelper.Info(typeof(string), "--MT End call GetUserInfo from UserRepository--");
                ErrorCodeHelper.QueueBackgroundErrorProcessException("3", "GetUserInfo", ex, -1, startProcessDate, "Re1");
            }
            LogHelper.Info(typeof(string), "--MT End call GetUserInfo from UserRepository--");
            return result;
        }
        public bool InsertTokenInfo(UserData userData)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            SqlParameter[] parames = new SqlParameter[6];
            try
            {
                DateTime date = DateTime.Now;
                parames[0] = new SqlParameter("@Token", userData.Token);
                parames[1] = new SqlParameter("@Browser", userData.Browser);
                parames[2] = new SqlParameter("@IpAddress", userData.IpAddress);
                parames[3] = new SqlParameter("@Id", userData.Id);
                parames[4] = new SqlParameter("@UserName", userData.UserNameCompare);
                SqlHelper.ExecuteNonQuery(Constants.DiMetricsConnectionString, CommandType.Text,
                    " UPDATE Users SET [Token] =@Token, [Browser] = @Browser, [IpAddress]=@IpAddress  WHERE [Id] =@Id  AND [UserName] = @UserName ", parames);
                return true;
            }
            catch (Exception ex)
            {
                ErrorCodeHelper.QueueBackgroundErrorProcessException("4", "InsertTokenInfo", ex, -1, startProcessDate, "Re1");
                return false;
                LogHelper.Error(ex.GetType(), string.Format(ex.Message), ex);
            }
        }
        public UserData FillUserData(DataRow dataRow)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            UserData result = new UserData();
            try
            {
                result.Id = Convert.ToInt32(dataRow["emp_id"]);
                result.FullName = Convert.ToString(dataRow["emp_first"]) + Convert.ToString(dataRow["emp_last"]);
                result.UserName = Convert.ToString(dataRow["emp_userid"]);
                //result.Browser = Convert.ToString(dataRow["Browser"]);
                //result.IpAddress = Convert.ToString(dataRow["IpAddress"]);
                result.CreatedDate = Convert.ToDateTime(dataRow["emp_start_date"]);
                result.ModitifiDate = Convert.ToDateTime(dataRow["emp_start_date"]);
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), string.Format(ex.Message), ex);
                ErrorCodeHelper.QueueBackgroundErrorProcessException("5", "FillUserData", ex, -1, startProcessDate, "Re1");
            }
            return result;
        }
        #endregion 
        #region  USER CRUD
        public bool DeteteUserById(int id)
        {
            throw new NotImplementedException();
        }

        public UserProfileData GetUserById(int id)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            UserProfileData result = new UserProfileData();
            try
            {
                //todo check exist in database
                if (id > 0)
                {
                    string commandText = "SELECT *  FROM employees with (nolock) WHERE emp_id = " + id;
                    DataSet ds = new DataSet();
                    ds = SqlHelper.ExecuteDataset(Constants.MainConnectionString
                        , CommandType.Text, commandText);
                    if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                    {
                        for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                        {
                            result = FillUserProfileData(ds.Tables[0].Rows[i]);
                        }
                    }
                    
                }
                
            }
            catch (Exception e)
            {
                ErrorCodeHelper.QueueBackgroundErrorProcessException("6", "GetUserById", e, -1, startProcessDate, "Re1");
            }
            
            return result;
        }

        public List<UserProfileData> GetUsers(int currentPage,int pageSize,string username)
        {
            
            //DataSet ds;
            string commandText = "select *,TotalRows = COUNT(*) OVER(),ROW_NUMBER() OVER(ORDER BY emp_start_date DESC) as RowsNumber  from employees with (nolock) ";
            commandText += " where emp_userid like '%'+@username+'%' OR @username='' OR @username IS NULL";
            commandText += " ORDER BY emp_start_date DESC";
            commandText += " OFFSET @PageSize *(@CurrentPage - 1) ROWS "
    + "FETCH NEXT @PageSize ROWS ONLY;";
            List<UserProfileData> result = new List<UserProfileData>();
            DateTime startProcessDate = DateTime.UtcNow;
            try
            {
                SqlParameter[] param = new SqlParameter[3];
                param[0] = new SqlParameter("@CurrentPage", currentPage);
                param[1] = new SqlParameter("@PageSize", pageSize);
                param[2] = new SqlParameter("@username", username);
                DataSet ds = new DataSet();
                ds = SqlHelper.ExecuteDataset(Constants.MainConnectionString, CommandType.Text, commandText,param);
                if (ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                    {
                        UserProfileData obj = new UserProfileData();
                        obj = FillUserProfileData(ds.Tables[0].Rows[i], i);
                        result.Add(obj);
                    }
                }
            }
            catch (Exception e)
            {
                
                ErrorCodeHelper.QueueBackgroundErrorProcessException("1", "GetUsers", e, -1, startProcessDate, "Re1");
            }
            return result;
        }

        public UserProfileData FillUserProfileData(DataRow dataRow, int i = -1)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            UserProfileData result = new UserProfileData();
            try
            {
                result.User.Id = Convert.ToInt32(dataRow["emp_id"]);
                if (i != -1)
                {
                    result.User.Index = Convert.ToInt32(dataRow["RowsNumber"]);
                    result.User.TotalRows = Convert.ToInt32(dataRow["TotalRows"]);
                }
                result.User.UserName = Convert.ToString(dataRow["emp_userid"]);
                result.User.Email = Convert.ToString(dataRow["emp_email"] ?? "");
                result.User.PhoneNumber = Convert.ToString(dataRow["emp_phone"] ?? "");
                result.User.FullName = Convert.ToString(dataRow["emp_first"] ?? "")+" "+ Convert.ToString(dataRow["emp_last"] ?? "");
                //bool isActive = false;
                //Boolean.TryParse(dataRow["IsActive"].ToString(), out isActive);
                //result.User.IsActive = isActive;
                //UserRole
                if (result.User.Id > 0)
                {
                    result.roles = _roleRepository.GetRoleByUserId(result.User.Id);
                }
                else
                {
                    result.Role.Role = "ERROR !";
                }

            }
            catch (Exception ex)
            {
                ErrorCodeHelper.QueueBackgroundErrorProcessException("7", "FillUserProfileData", ex, -1, startProcessDate, "Re1");
                throw;
            }
            return result;

        }

        public bool UpdateUser(UserProfileData item)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            //todo check item null
            var user = item.User;
            //user.Password = MD5.MD5Hash(user.UserNameCompare.Trim() + user.Password);
            var roles = item.roles;
            
            
            SqlTransaction objTrans = null;
            using (SqlConnection objConn = new SqlConnection(Constants.MainConnectionString))
            {
                objConn.Open();
                objTrans = objConn.BeginTransaction();
                
                
                try
                {
                    var sqlDelete = "delete from employee_roles where emp_id=" + user.Id;
                    SqlCommand cmdDelete = new SqlCommand(sqlDelete,objConn,objTrans);
                    cmdDelete.ExecuteNonQuery();
                    
                    foreach (var role in roles)
                    {
                        string cmdTextRole = string.Format("insert into employee_roles(emp_id,emp_role_id) values({0},{1})", user.Id, role.Id);
                        SqlCommand objCmd2 = new SqlCommand(cmdTextRole, objConn, objTrans);
                        objCmd2.ExecuteNonQuery();
                    }
                    objTrans.Commit();
                    return true;
                }
                catch (Exception ex)
                {
                    //to do log
                    ErrorCodeHelper.QueueBackgroundErrorProcessException("8", "UpdateUser", ex, -1, startProcessDate, "Re1");
                    
                    objTrans.Rollback();
                    return false;
                }
                finally
                {
                    objConn.Close();
                }
            }
        }

        public bool InsertUser(UserProfileData item)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            var user = item.User;
            user.Password = MD5.MD5Hash(user.UserNameCompare + user.Password);
            var role = item.Role;
            if (!IsExistUserInDb(user.UserNameCompare, user.Email,false))
            {
                string cmdTextUser = string.Format("INSERT INTO Users(UserName, Password, FullName, Email, PhoneNumber) VALUES('{0}', '{1}', N'{2}', '{3}', '{4}') SELECT SCOPE_IDENTITY();"
                , user.UserNameCompare, user.Password, user.FullName, user.Email, user.PhoneNumber);

                SqlTransaction objTrans = null;
                using (SqlConnection objConn = new SqlConnection(Constants.DiMetricsConnectionString))
                {
                    int userId = 0;
                    objConn.Open();
                    objTrans = objConn.BeginTransaction();
                    SqlCommand objCmd1 = new SqlCommand(cmdTextUser, objConn, objTrans);

                    try
                    {
                        object returnObj = objCmd1.ExecuteScalar();
                        if (returnObj != null)
                        {
                            int.TryParse(returnObj.ToString(), out userId);
                        }
                        if (userId > 0)
                        {
                            string cmdTextRole = string.Format("INSERT INTO UserRole(UserId, RoleId) VALUES('{0}', '{1}');  ", userId, role.Id);
                            SqlCommand objCmd2 = new SqlCommand(cmdTextRole, objConn, objTrans);
                            objCmd2.ExecuteNonQuery();
                            objTrans.Commit();
                        }
                        else
                        {
                            return false;
                        }

                        return true;
                    }
                    catch (Exception ex)
                    {
                        //to do log
                        ErrorCodeHelper.QueueBackgroundErrorProcessException("9", "InsertUser", ex, -1, startProcessDate, "Re1");
                        objTrans.Rollback();
                        return false;
                    }
                    finally
                    {
                        objConn.Close();
                    }
                }
            }
            else
            {
                //todo message
                return false;
            }
        }

        public bool IsExistUserInDb(string userName, string email, bool isCheckUserName)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            try
            {
                string commandText = string.Empty;
                if (isCheckUserName)
                {
                    commandText= string.Format("SELECT * FROM Users with(nolock) WHERE UserName = '{0}'", userName.ToLower());

                }
                else
                {
                    commandText = string.Format("SELECT * FROM Users with(nolock) WHERE UserName = '{0}' AND Email ='{1}'", userName.ToLower(), email.ToLower());

                }
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
                ErrorCodeHelper.QueueBackgroundErrorProcessException("10", "IsExistUserInDb", ex, -1, startProcessDate, "Re1");
                return false;
            }
        }

        public bool ActiveUser(UserData data)
        {
            DateTime startProcessDate = DateTime.UtcNow;
            if (data.Id > 0)
            {
                using (SqlConnection objConn = new SqlConnection(Constants.DiMetricsConnectionString))
                {
                    objConn.Open();
                    string cmdTextUser = string.Format("UPDATE Users SET [IsActive] = '{0}' WHERE [Id] = {1}", data.IsActive, data.Id);
                    SqlCommand objCmd1 = new SqlCommand(cmdTextUser, objConn);
                    try
                    {
                        objCmd1.ExecuteNonQuery();
                        return true;
                    }
                    catch (Exception ex)
                    {
                        //to do log   
                        ErrorCodeHelper.QueueBackgroundErrorProcessException("11", "ActiveUser", ex, -1, startProcessDate, "Re1");
                        return false;
                    }
                }
            }
            else
            {
                return false;
            }
        }
        #endregion

    }
}
