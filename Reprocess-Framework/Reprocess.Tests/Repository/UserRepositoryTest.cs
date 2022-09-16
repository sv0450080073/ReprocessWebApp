using Moq;
using Reprocess.Data.RoleRepository;
using Reprocess.Data.Users;
using Reprocess.Model;
using Reprocess.Model.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Reprocess.Tests.Repository
{
    public class UserRepositoryTest
    {
        [Fact]
        public void GetUserByIdTest()
        {
            int id = 1;
            var expected = new UserProfileData()
            {
                User = new UserData()
                {
                    Id = 1
                }
            };
            var rep = new UserRepository(new Mock<IRoleRepository>().Object);
            var actual = rep.GetUserById(id);
            Assert.Equal(expected.User.Id, actual.User.Id);
        }
        [Fact]
        public void CheckUserTest()
        {
            var user = new UserLoginData()
            {
                UserName = "drupp_dicentral",
                Password = "dicentral"
            };
            var rep = new UserRepository(new Mock<IRoleRepository>().Object);
            var actual = rep.CheckUser(user);
            Assert.True(actual);
        }
        [Fact]
        public void GetUserInfoTest()
        {
            var user = new UserLoginData()
            {
                UserName = "drupp_dicentral",
                Password = "dicentral"
            };
            var rep = new UserRepository(new Mock<IRoleRepository>().Object);
            var actual = rep.GetUserInfo(user);
            Assert.Equal(user.UserName, actual.UserName);
        }
    }
}
