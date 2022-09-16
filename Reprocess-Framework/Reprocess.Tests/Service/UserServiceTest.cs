using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using Moq;
using Reprocess.Data.Users;
using Reprocess.Model.User;
using Reprocess.Model.Role;
using Reprocess.Service.Users;
using Reprocess.Service.RoleService;
using Reprocess.Data.RoleRepository;

namespace Reprocess.Tests.Service
{
    public class UserServiceTest
    {
        [Fact]
        public void GetUserByIdTest()
        {
            int id = 0;
            var expected = new UserProfileData();
            var roleService = new RoleService(new Mock<IRoleRepository>().Object);
            var rep = new Mock<IUserRepository>();
            rep.Setup(x => x.GetUserById(It.IsAny<int>())).Returns(expected);
            var service = new UserService(rep.Object,roleService);
            var actual = service.GetUserById(id);
            Assert.Equal(expected, actual);
        }
        [Fact]
        public void UpdateUserTest()
        {
            var model = new UserProfileData();
            var roleService = new RoleService(new Mock<IRoleRepository>().Object);
            var rep = new Mock<IUserRepository>();
            rep.Setup(x => x.UpdateUser(It.IsAny<UserProfileData>())).Returns(true);
            var service = new UserService(rep.Object, roleService);
            var actual = service.UpdateUser(model);
            Assert.True(actual);
        }
    }
}
