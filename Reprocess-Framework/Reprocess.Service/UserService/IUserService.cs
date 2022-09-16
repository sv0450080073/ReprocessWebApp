using Reprocess.Common;
using Reprocess.Data.RoleRepository;
using Reprocess.Data.Users;
using Reprocess.Model;
using Reprocess.Model.User;
using Reprocess.Service.RoleService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Service.Users
{
    public interface IUserService
    {
        UserProfileData GetUserProfile(UserLoginData userLogin);
        bool CheckUser(UserLoginData userLogin);
        UserData GetUserInfo(UserLoginData userLogin);
        bool InsertTokenInfo(UserData userData);
        List<UserProfileData> GetUsers(int currentPage, int pageSize, string username);
        bool DeteteUserById(int id);
        UserProfileData GetUserById(int id);
        bool UpdateUser(UserProfileData item);
        bool InsertUser(UserProfileData item);
        bool IsExistUserInDb(string userName, string email, bool isCheckUserName);

        bool ActiveUser(UserData data);
    }
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IRoleService _roleService;
        public UserService(IUserRepository userRepository, IRoleService roleService)
        {
            _userRepository = userRepository;
            _roleService = roleService;
        }
        #region Login Handler

        public UserProfileData GetUserProfile(UserLoginData userLogin)
        {
            UserProfileData result = new UserProfileData();
            try
            {
                if (CheckUser(userLogin))
                {
                    //check userLogin
                    result.User = GetUserInfo(userLogin);
                    if (result.User.Id > 0)
                    {
                        //check userId
                        result.roles = _roleService.GetRoleByUserId(result.User.Id);
                        if (result.Role != null && result.Role.Id > 0)
                        {
                            //gen token and save db
                            var jwtoken = JWTHelper.GenerateToken(result.User.UserName,userLogin.Browser, userLogin.IpAddress);
                            result.User.Token = jwtoken;
                            //save db again
                            //result.User.IpAddress = userLogin.IpAddress;
                            //result.User.Browser = userLogin.Browser;
                            //if (!InsertTokenInfo(result.User)) //add token fail
                            //{
                                //result.User.Token = "";
                            //}
                        }
                    }
                }
                else
                {
                    result.ErrorMSG = "The Username or Password is Incorrect. ";
                }

            }
            catch (Exception ex)
            {
                result.ErrorMSG = "The Username or Password is Incorrect. ";
                //todo log
            }
            return result;
        }

        public bool CheckUser(UserLoginData userLogin)
        {
            return _userRepository.CheckUser(userLogin);
        }

        public UserData GetUserInfo(UserLoginData userLogin)
        {
            //todo check userLogin
            return _userRepository.GetUserInfo(userLogin);
        }
        public bool InsertTokenInfo(UserData userData)
        {
            return _userRepository.InsertTokenInfo(userData);
        }
        #endregion
        #region USER CRUD
        public List<UserProfileData> GetUsers(int currentPage, int pageSize, string username)
        {
            return _userRepository.GetUsers(currentPage,pageSize,username);
        }

        public bool DeteteUserById(int id)
        {
            throw new NotImplementedException();
        }

        public UserProfileData GetUserById(int id)
        {
            return _userRepository.GetUserById(id);
        }

        public bool UpdateUser(UserProfileData item)
        {
            return _userRepository.UpdateUser(item);
        }

        public bool InsertUser(UserProfileData item)
        {
            return _userRepository.InsertUser(item);
        }

        public bool IsExistUserInDb(string userName, string email,bool isCheckUserName)
        {
            return _userRepository.IsExistUserInDb(userName, email, isCheckUserName);
        }

        public bool ActiveUser(UserData data)
        {
            return _userRepository.ActiveUser(data);
        }
        #endregion

    }
}
