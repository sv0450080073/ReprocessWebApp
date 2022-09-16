import { Component, OnInit } from '@angular/core';
import { RoleData } from '../Model/role/role-data';
import { RoleService } from '../Service/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  roles: RoleData[];
  role: RoleData;
  modalTile: string = "Add User";
  isActiveAddEditRoleComp: boolean = false;
  isLoading: boolean = false;
  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.getRoles();
  }
//#region User Method
modalAdd() {
  this.initRole() ;
  this.isActiveAddEditRoleComp = true;
  console.log(this.role);
  this.modalTile = "Add Role";
}
modalEdit(id: any) {
  this.getUserById(id);
  this.modalTile = "Edit Role"
}
modalClose() {
  this.isActiveAddEditRoleComp = false;
  this.getRoles();
}

initRole () {

  this.role ={} as RoleData;
  this.role.Id = 0;
  this.role.Role= "";
  this.role.Description = "";
}
//#endregion

//#region Call Service
getRoles() {
  this.roleService.getRoles().subscribe(res => {
    this.roles = res;
    console.log(res);
  })
}
getUserById(id: number | string) {
  return this.roleService.getRoleById(id).toPromise()
    .then(res => {
      this.role = res;
      console.log(res);
    }).then(res => {
      this.isActiveAddEditRoleComp = true;
    })
}
loaderHanler($event) {
  this.isLoading = $event;
}
//#endregion
}
