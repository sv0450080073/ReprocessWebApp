import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

//import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
 constructor( private router: Router) { }
//private authenticationService: AuthenticationService,
 intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {

 return newRequest.handle(request).pipe(catchError(err =>{
  console.log(err);

 if (err.status === 401) {
 //if 401 response returned from api, logout from application & redirect to login page.
 //this.authenticationService.logout();
 console.log("huhu");

 }

 const error = err.error.message || err.statusText;
 return Observable.throw(error);
 }));
 }
}
