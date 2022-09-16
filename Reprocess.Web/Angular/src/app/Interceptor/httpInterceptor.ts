import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class httpInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
// add auth header with jwt if account is logged in and request is to the api url
const account = localStorage.getItem('jwt');
const isLoggedIn = account;
const isApiUrl = httpRequest.url.startsWith(environment.API_URL);
if (isLoggedIn && isApiUrl) {
  httpRequest = httpRequest.clone({
        setHeaders: { Authorization: `Bearer ${account}` }
    });
}

return next.handle(httpRequest);
  }
}
