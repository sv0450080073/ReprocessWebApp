import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoleData } from '../Model/role/role-data';
import { UserData } from '../Model/user/user-data';
import { UserProfileData } from '../Model/user/user-profile-data';
import { RoleService } from '../Service/role.service';
import { UserService } from '../Service/user.service';
import { Result } from '../shared/result';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  users: UserProfileData[];
  page = 1;
  pageSize = 10;
  count = 0;
  pageSizes = [10, 50, 100];
  user: UserProfileData;
  modalTile: string = "Add User";
  isActiveAddEditUserComp: boolean = false;
  userData: UserData
  result :Result;
  isLoading: boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  username: string = "";
  constructor(private userService: UserService, private roleService: RoleService, private toastService :ToastrService)
{}
  ngOnInit() {
    this.getUsers();

  }
  //#region User Method
  modalAdd() {
    this.initUser();
    this.isActiveAddEditUserComp = true;
    console.log(this.user);
    this.modalTile = "Add User";
  }
  modalEdit(id: any) {
    this.getUserById(id);
    this.modalTile = "Edit User"
  }
  modalClose() {
    this.isActiveAddEditUserComp = false;
    this.getUsers();
  }

  initUser() {
    this.user = { User: {}, Role: {} } as UserProfileData;
    this.user.User.Id = 0;
    this.user.User.UserName = "";
    this.user.User.Password = "";
    this.user.User.FullName = "";
    this.user.User.PhoneNumber = "";
    this.user.User.Email = "";
    this.user.Role.Role = "";
    this.user.Role.Id = 0;
  }
  isActiveUser(user: UserData)
  {
    return user.IsActive;
  }
  onChangeActiveUser(itemChage: any,event: any)
  {
    itemChage.IsActive = event.target.checked
    this.activeUser(itemChage);
    console.log("-----onChangeActiveUser----------")
    console.log(event.target.checked);
    console.log(itemChage);

  }
  //#endregion

  //#region Call Service
  SearchData() {
    this.getUsers();
  }
  onKeydown(event) {
    console.log(event);
    this.getUsers();
  }
  getUsers() {
    this.isLoading = true;
    console.log(this.page);
    this.userService.getUser(this.page, this.pageSize, this.username).subscribe(res => {
      if (res.length > 0) {
        this.users = res;
        this.count = this.users[0].User.TotalRows;
      }
      else {
        this.count = 0;
      }
      console.log(res);
      this.isLoading = false;
    })
  }
  handlePageChange(event) {
    this.page = event;
    this.getUsers();
  }

  handlePageSizeChange(event) {

    this.pageSize = event;
    console.log(this.pageSize);
    this.page = 1;
    this.getUsers();
  }
  getUserById(id: number | string) {
    return this.userService.getUserById(id).toPromise()
      .then(res => {
        this.user = res;
        console.log(this.user);
      }).then(res => {
        this.isActiveAddEditUserComp = true;
      })
  }
  activeUser(data:any)
  {
    return this.userService.updateActiveUser(data).toPromise()
    .then(res => {
      this.result = res;
      if(this.result)
      {
        this.toastService.success("Success", "Success!");
        this.getUsers();
      }
      else{
        this.toastService.error("Fail update active", "Fail!");
      }
    })


  }

  loaderHanler($event) {
    this.isLoading = $event;
  }
  //#endregion

}
