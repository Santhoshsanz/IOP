import { Injectable } from '@angular/core';
import {LatestAlerts} from './model/latestAlerts';
import {Http, Headers, RequestOptions} from '@angular/http';
import { FacilityComponent } from './facility/facility.component';
@Injectable()
export class DataServiceService {
  
  constructor() { }
//All ALerts
getALerts(){
let data=[];
let cid:any;
let fid:any;
let final:any;
   LatestAlerts.map(function(e,x){
     cid=e.ClientID;
    return e.Facilities.map(function(i,j){
      fid=i.FacilityName;
        return i.Alerts.map(function(m,n){
         final=m;
         final.ClientId=cid;
         final.FacilityId=fid;
          data.push(final);
        })
    })
  });
  console.log(typeof(data));
  return data;
}
//Individual Clients
getClients(id:string){
return LatestAlerts.filter(function(e,x){if(e.ClientID==id){ return e}})
}
//all alerts under single Client
getAlertsF(id:string){
  let client:any;
  let alerts=[];
  let cid:any;
  let fid:any;
  let final:any;
  client=LatestAlerts.filter(function(e,x){
    if(e.ClientID==id){ 
      return e
    }});
      client.filter(function(i,j){
        cid=i.ClientID;
        return i.Facilities.map(function(m,n){
          fid=m.FacilityName;
          return m.Alerts.map(function(a,b){
            final=a;
            final.ClientId=cid;
            final.FacilityId=fid;
            alerts.push(final);
           })
        })   
    })
    return alerts;
  }
//Get Single Facility
getFacilty(clientId,facilityId){
let client:any;
let final:any;
let facility=[];
    LatestAlerts.filter(function(e,x){
        if(e.ClientID==clientId){
          e.Facilities.filter(function(i,j){
            if(i.FacilityName==facilityId){
         facility.push(i);
          }
        })
    }
    })
    console.log("Maping")
    facility.map(function(e,x){
      console.log("first")
      e.Alerts.map(function(i,j){
        console.log("Second")
        i.ClientId=clientId;
        i.FacilityId=facilityId
      })
    })
    console.log(facility)
  return facility;
  }

  //Get Individual Alert
  getALertsI(clientId,facilityId,alertId){
    let final:any;
    let allAlerts=this.getAlertsF(clientId);
    return allAlerts.filter(function(e,x){
        if(e.Id==alertId){
          return e;
        }
        
    })
  }
}
