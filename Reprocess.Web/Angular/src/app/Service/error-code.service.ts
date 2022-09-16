import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErrorCodeService {

  constructor(private httpClient: HttpClient) { }
  private API_URL = environment.API_URL;
  url = this.API_URL + "ErrorCode/";
  GetErrors(currentPage: number, pageSize: number) {
    return this.httpClient.get(this.url + "GetErrors?currentPage=" + currentPage + "&pageSize="+pageSize);
  }
}
