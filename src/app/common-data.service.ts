import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient,HttpRequest,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class CommonDataService {

  constructor(private _http:HttpClient) { }
  postData(body:any,url:string,headers:HttpHeaders){
      return this._http.post(url,body,{headers})
  }
  getData(url:string,headers:HttpHeaders){
    return this._http.get(url,{headers})
  }
  deleteData(url,id){
    return this._http.delete(url+"/"+id);
  }
}
