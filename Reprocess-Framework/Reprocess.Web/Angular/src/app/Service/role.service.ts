import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoleData } from '../Model/role/role-data';
import { Result } from '../shared/result';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private API_URL= environment.API_URL;
  url = this.API_URL +"Role";

  constructor(private httpClient:HttpClient) { }
 //#region  USER CRUD
 getRoles() : Observable<RoleData[]> {
  return this.httpClient.get<RoleData[]>(this.url  + "/GetRoles");
}
getRoleById(id: number | string): Observable<RoleData> {
  return this.httpClient.get<RoleData>(this.url  + "/GetRoleById/" + `${id}`);
}
 createRole(roleItem :RoleData): Observable<Result>  {
  return this.httpClient.post<Result>(this.url + "/InsertRole/",roleItem);
}
updateRole(roleItem:RoleData) : Observable<Result> {
  return this.httpClient.post<Result>(this.url + "/UpdateRole/" , roleItem);
}
checkRoleNameExist(roleName :string )
 {
  return this.httpClient.get<boolean>(this.url  + "/IsExistRoleInDb?roleName=" +roleName);
 }

//#endregion
}
