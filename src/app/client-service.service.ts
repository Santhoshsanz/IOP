import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {apiData} from './common'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ClientServiceService {
  url = apiData.url+"/"+apiData.client
  constructor(private _http: HttpClient) { }
  getAllClients(): Observable<any> {
    console.log("Service  ");
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    return this._http.get(this.url, { headers })
  }
  saveClient(data): Observable<any> {
    console.log("Save");
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    return this._http.post(this.url, data, { headers })
  }
  deleteClient(id) {
    return this._http.delete(this.url + "/" + id)
  }
  getClient(id) {
    return this._http.get(this.url + "/" + id);
  }
}
