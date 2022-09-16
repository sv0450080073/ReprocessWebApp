import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrackSearchDataParams } from '../Model/metrics_reprocess/track-search-data-params';

import { MtReprocessDataGrid } from '../Model/metrics_reprocess/mt-reprocess-data-grid';
import { ReprocessSearch } from '../Model/metrics_reprocess/reprocess-search';
import { TrackDataGrid } from '../shared/track-data-grid';
import { TrackSearch } from '../shared/track-search';

@Injectable({
  providedIn: 'root'
})
export class MetricReprocessService {
  constructor( private httpClient:HttpClient) { }
  private API_URL= environment.API_URL;
  url = this.API_URL +"MetricsReprocess";
  getStatusFiles(trackSearch : TrackSearch) : Observable<TrackDataGrid[]>
  {
    return this.httpClient.post<TrackDataGrid[]>(this.url + "/TrackStatusFile",trackSearch);
  }
  mtReprocess(reprocessSearch : ReprocessSearch) : Observable<MtReprocessDataGrid[]>
  {
    return this.httpClient.post<MtReprocessDataGrid[]>(this.url + "/MTReprocess",reprocessSearch);
  }
  trackStatusFiles(trackSearchs : TrackSearch[]) : Observable<TrackDataGrid[]>
  {
    return this.httpClient.post<TrackDataGrid[]>(this.url + "/TrackStatusFile",trackSearchs);
  }
  getTrackStatusFiles(trackSearchParams : TrackSearchDataParams) : Observable<TrackDataGrid[]>
  {
    return this.httpClient.post<TrackDataGrid[]>(this.url + "/TrackStatusFiles",trackSearchParams);
  }
}
