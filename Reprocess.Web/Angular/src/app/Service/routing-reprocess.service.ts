import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RoutingReprocessData } from '../Model/metrics_reprocess/routing-reprocess-data';

@Injectable({
  providedIn: 'root'
})
export class RoutingReprocessService {
  private API_URL = environment.API_URL;
  urlRoutingReprocess = this.API_URL + "RoutingReprocess";
  constructor(private httpClient: HttpClient) { }
  startRoutingReprocess(routingReprocess: RoutingReprocessData): Observable<any> {
    return this.httpClient.post<any>(this.urlRoutingReprocess + "/Index", routingReprocess);
  }
}
