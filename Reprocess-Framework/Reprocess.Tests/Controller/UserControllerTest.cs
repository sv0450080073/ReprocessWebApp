using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using System.Web.Mvc;
using Moq;
using Reprocess.Service.Users;
using Reprocess.Web.Controllers;
using Reprocess.Model.User;
using Newtonsoft.Json;
using Reprocess.Model.Role;

namespace Reprocess.Tests.Controller
{
    public class UserControllerTest
    {
        [Fact]
        public void GetUserByIdTest()
        {
            int id = 0;
            var expected = new UserProfileData();
            var userService =new Mock<IUserService>();
            userService.Setup(x => x.GetUserById(It.IsAny<int>())).Returns(expected);
            var controller = new UserController(userService.Object);
            var result = controller.GetUserById(id);
            var actual = result.Data as UserProfileData;
            Assert.Equal(expected, actual);
        }
        [Fact]
        public void UpdateUserTest()
        {
            var model = new UserProfileData();
            var jsonRoles = JsonConvert.SerializeObject(new List<RoleData>());
            model.JsonRole = jsonRoles;
            var userService = new Mock<IUserService>();
            userService.Setup(x => x.UpdateUser(It.IsAny<UserProfileData>())).Returns(true);
            var controller = new UserController(userService.Object);
            var result = controller.UpdateUser(model);
            var actual = Convert.ToBoolean(result.Data);
            Assert.True(actual);
        }
    }
}
