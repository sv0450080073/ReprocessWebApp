import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Observable, of } from 'rxjs';
import { debounceTime, finalize, map, take, tap } from 'rxjs/operators';
import { RoleData } from 'src/app/Model/role/role-data';
import { RoleService } from 'src/app/Service/role.service';
import { Result } from 'src/app/shared/result';

@Component({
  selector: 'app-add-edit-role',
  templateUrl: './add-edit-role.component.html',
  styleUrls: ['./add-edit-role.component.scss']
})
export class AddEditRoleComponent implements OnInit {

  constructor(private roleForm: FormBuilder, private roleService: RoleService, private toastr: ToastrService) { }

  rfRole: FormGroup;
  roleDataItem: RoleData
  result: Result;
  isSubmitForm: boolean = false;
  isExistRoleName: boolean =false;
  @Input() RoleDataInp: RoleData;
  public onLoaded = new EventEmitter<boolean>();
  ngOnInit() {
    this.rfRole = this.roleForm.group({
      roleName: new FormControl(this.RoleDataInp.Role, [Validators.required, Validators.maxLength(30)],
      ), ///this.validateEmailNotTaken.bind(this)),
      description: new FormControl(this.RoleDataInp.Description, [Validators.required, Validators.maxLength(100)]),
    });
    this.onChageRoleName(this.RoleDataInp.Id > 0 ? false: true)
  }

  //#region  CALL SERVICE

  addRole() {

    if (this.rfRole.valid && !this.isExistRoleName) {
      this.onLoaded.emit(true);
      this.initRoleData(true);
      this.roleService.createRole(this.roleDataItem).toPromise()
        .then(res => {
          this.result = res;
          this.onLoaded.emit(false);
          var closeModalBtn = document.getElementById('add-edit-modal-close');
          if (closeModalBtn) {
            closeModalBtn.click();
          }
        })
        .then(res => {
          if (this.result) {
            this.alertSuccess("Add role success !");
          }
          else {
            this.alertError("Add role fail !");
          }
        })
    }
  }
  updateRole() {
    if (this.rfRole.valid && !this.isExistRoleName) {
      this.initRoleData(false);
      this.onLoaded.emit(true);
      this.roleService.updateRole(this.roleDataItem).toPromise()
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

            this.alertSuccess("Update role success !");
          }
          else {

            this.alertError("Update role fail !");
          }
        })
    }
  }
  //#endregion
  //#region  METHOD
  initRoleData(isInsert: boolean) {
    this.roleDataItem = {} as RoleData;
    var formValue = this.rfRole.value;
    this.roleDataItem.Id = isInsert ? 0 : this.roleId;
    this.roleDataItem.Role = formValue.roleName;
    this.roleDataItem.Description = formValue.description.trim();
    console.log(this.roleDataItem);
  }
  //#endregion
  get roleId() {
    return this.RoleDataInp.Id;
  }
  get roleName() {
    return this.rfRole.get('roleName');
  }
  get description() {
    return this.rfRole.get('description');
  }
  createExistRoleNameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.roleService
        .checkRoleNameExist(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { roleExist: true } : null
          ),
          take(1), finalize(() => { })
        );
    };

  }
  //#region  Alert Toasrt
  alertSuccess(message: string) {
    this.toastr.success(message, "Success");
  }
  alertError(message: string) {
    this.toastr.error(message, "Fail");
  }
  //#endregion
  onChageRoleName(isIinsert: boolean) {
    this.roleName.valueChanges.subscribe(val => {
      if (val) {
        if (!isIinsert) {
          var isSameUserUpdate = this.RoleDataInp.Role.toLowerCase().trim() === val.toString().toLowerCase().trim();
          if (!isSameUserUpdate) {
            return this.roleService.checkRoleNameExist(val).toPromise()
              .then(res => {
                this.isExistRoleName = res;
              })
          }
          else {
            this.isExistRoleName = false;
          }
        }
        else {
          return this.roleService.checkRoleNameExist(val).toPromise()
            .then(res => {
              this.isExistRoleName = res;
            })
        }
      }
      else {
        this.isExistRoleName = false;
      }
    })
  }
}
