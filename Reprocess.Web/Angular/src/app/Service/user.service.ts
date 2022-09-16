import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserData } from '../Model/user/user-data';
import { UserLoginData } from '../Model/user/user-login-data';
import { UserProfileData } from '../Model/user/user-profile-data';
import { Result } from '../shared/result';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL= environment.API_URL;
  urlLogin = this.API_URL +"Login";
  url = this.API_URL +"User";
  constructor(private httpClient:HttpClient) { }
  userLogin(userLogin : UserLoginData) : Observable<any>
  {
    return this.httpClient.post<any>(this.urlLogin + "/UserLogin",userLogin);
  }
  //#region  USER CRUD
  getUser(currentPage: number, pageSize: number, username: string): Observable<UserProfileData[]> {
    return this.httpClient.get<UserProfileData[]>(this.url + "/GetUsers?currentPage=" + currentPage + "&pageSize=" + pageSize + "&username=" + username);
  }
  getUserById(id: number | string): Observable<UserProfileData> {
    return this.httpClient.get<UserProfileData>(this.url  + "/GetUserById/" + `${id}`);
  }
   createUser(userProfile :UserProfileData): Observable<Result>  {
    return this.httpClient.post<Result>(this.url + "/InsertUser/",userProfile);
  }
  updateUser(userProfile:UserProfileData) : Observable<Result> {
    return this.httpClient.post<Result>(this.url + "/UpdateUser/" , userProfile);
  }
  updateActiveUser(userData:UserData) : Observable<Result> {
    return this.httpClient.post<Result>(this.url + "/ActiveUser/" , userData);
  }

  checkUserNameExist(userName :string )
 {
  return this.httpClient.get<boolean>(this.url  + "/IsExistUserInDb?userName=" + userName + "&email=''"+"&isCheckUserName=true" );
 }

  //#endregion
}
