import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoleData } from 'src/app/Model/role/role-data';
import { UserProfileData } from 'src/app/Model/user/user-profile-data';
import { RoleService } from 'src/app/Service/role.service';
import { UserService } from 'src/app/Service/user.service';
import { Result } from 'src/app/shared/result';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
  constructor(private userForm: FormBuilder, private userService: UserService, private toastr: ToastrService, private roleService: RoleService) { }
  rfUser: FormGroup;
  userProfileItem: UserProfileData
  result: Result;
  roles: RoleData[];
  roleSelected: RoleData;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isExistUserName: boolean;
  @Input() userProfileData: UserProfileData;
  public onLoaded = new EventEmitter<boolean>();
  ngOnInit() {
    this.rfUser = this.userForm.group({
      userName: new FormControl(this.userProfileData.User.UserName,
        [Validators.required, Validators.maxLength(20)]
      ),
      //password: new FormControl(this.userProfileData.User.Password, [Validators.required, Validators.maxLength(8)]),
      fullName: new FormControl(this.userProfileData.User.FullName, [Validators.required, Validators.maxLength(100)]),
      phoneNumber: new FormControl(this.userProfileData.User.PhoneNumber  ),
      email: new FormControl(this.userProfileData.User.Email, [Validators.required, Validators.maxLength(50), Validators.pattern(this.emailPattern)])
      //roleName: new FormControl(this.userProfileData.Role.Role, Validators.required),
      //roleId: new FormControl(this.userProfileData.Role.Id, Validators.required),
    });
    this.getRolesCbb();
    this.onChageUserName(this.userProfileData.User.Id > 0 ? false : true);
  }

  //#region  CALL SERVICE
  addUser() {
    if (this.rfUser.valid && !this.isExistUserName) {
      this.initUserProfileData(true);

      this.onLoaded.emit(true);
      console.log(this.userProfileItem);
      this.userService.createUser(this.userProfileItem).toPromise()
        .then(res => {
          this.onLoaded.emit(false);
          this.result = res;
          var closeModalBtn = document.getElementById('add-edit-modal-close');
          if (closeModalBtn) {
            closeModalBtn.click();
          }
        })
        .then(res => {
          if (this.result) {
            this.alertSuccess("Add user success !");
          }
          else {
            this.toastr.error("Add user fail !")
          }
        })
    }



  }
  updateUser() {
    if (this.rfUser.valid && !this.isExistUserName) {
      this.initUserProfileData(false);
      this.onLoaded.emit(true);
      console.log(this.userProfileItem);
      let selectedRoles: any[] = [];
      for (let item of this.roles) {
        if (item.isSelected) {
          selectedRoles.push(item);
        }
      }
      this.userProfileItem.JsonRole = JSON.stringify(selectedRoles);
      this.userService.updateUser(this.userProfileItem).toPromise()
        .then(res => {
          this.onLoaded.emit(false);
          this.result = res;
          var closeModalBtn = document.getElementById('add-edit-modal-close');
          if (closeModalBtn) {
            closeModalBtn.click();
          }
        })
        .then(res => {
          if (this.result) {
            this.alertSuccess("Update user success !");
          }
          else {
            this.toastr.error("Update user fail !")
          }
        })

    }
  }
  getRolesCbb() {
    this.onLoaded.emit(true);
    return this.roleService.getRoles().toPromise()
      .then(res => {
        this.onLoaded.emit(false);
        this.roles = res;
        console.log(this.roles);
        for (var roleItem of this.userProfileData.roles) {
          for (var item of this.roles) {
            if (roleItem.Id == item.Id) {
              item.isSelected = true;
            }
          }
        }
      });
  }
  //#endregion
  //#region  METHOD
  onChangeRole(e) {
    console.log(e.selectedIndex + 1);
    this.roleSelected = this.roles.find(function (role, index) {
      return role.Id === (e.selectedIndex + 1);
    })
  }
  initUserProfileData(isInsert: boolean) {
    this.userProfileItem = { User: {}, Role: {} } as UserProfileData;
    var formValue = this.rfUser.value;
    let user = this.userProfileItem.User;
    let role = this.userProfileItem.Role;
    //todo check roleselected null
    //role.Id = this.roleSelected.Id;
    //role.Role = this.roleSelected.Role;
    /*role.Description = this.roleSelected.Description.trim();*/
    user.Id = isInsert ? 0 : this.userId;
    user.UserName = formValue.userName.trim();
    user.Password = formValue.password;
    user.Email = formValue.email.trim();
    user.FullName = formValue.fullName.trim();
    user.PhoneNumber = formValue.phoneNumber;
    console.log(this.userProfileItem);
  }
  //#endregion
  //#region  Property
  get userId() {
    return this.userProfileData.User.Id;
  }
  get userName() {
    return this.rfUser.get('userName');
  }
  get password() {
    return this.rfUser.get('password');
  }
  get fullName() {
    return this.rfUser.get('fullName');
  }
  get phoneNumber() {
    return this.rfUser.get('phoneNumber');
  }
  get roleName() {
    return this.rfUser.get('roleName');
  }
  get roleId() {
    return this.rfUser.get('roleId');
  }
  get email() {
    return this.rfUser.get('email');
  }
  //#endregion
  //#region Custom Validator
  IsCheckExistUserName(userName: string) {

    if (userName) {
      return this.userService.checkUserNameExist(userName).toPromise()
        .then(res => {
          this.isExistUserName = res;
        })
    }
  }
  onChageUserName(isIinsert: boolean) {
    this.userName.valueChanges.subscribe(val => {
      if (val) {
        if (!isIinsert) {
          var isSameUserUpdate = this.userProfileData.User.UserName.toLowerCase().trim() === val.toString().toLowerCase().trim();
          if (!isSameUserUpdate) {
            return this.userService.checkUserNameExist(val).toPromise()
              .then(res => {
                this.isExistUserName = res;
                console.log(this.isExistUserName);
              })
          }
          else {
            this.isExistUserName = false;
          }
        }
        else {
          return this.userService.checkUserNameExist(val).toPromise()
            .then(res => {
              this.isExistUserName = res;
            })
        }
      }
      else {
        this.isExistUserName = false;
      }
    })
  }


  // createExistRoleNameValidator(): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors> => {
  //     if (!control.valueChanges || control.pristine) {
  //       return null;
  //     }
  //     return this.userService
  //       .checkUserNameExist(control.value)
  //       .pipe(
  //         // map((result: boolean) =>
  //         //   result ? { userExist: true } : null
  //         // ),
  //       );
  //   };
  // }
  //#endregion CustomValidator
  //#region  Alert Toasrt
  alertSuccess(message: string) {
    this.toastr.success(message, "Success");
  }
  alertError(message: string) {
    this.toastr.error(message, "Fail");
  }
  //#endregion
}
