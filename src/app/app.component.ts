import { Component } from '@angular/core';
import {ElementRef} from '@angular/core';
import {Events} from '../app/model/alertsEvents';
import{apiData,images} from '../app/common';
import {CommonDataService} from './../app/common-data.service'
import {HttpHeaders } from '@angular/common/http';
declare let jQuery:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  image=images;
  constructor(private elRef:ElementRef,private _commonDataService:CommonDataService) { }
  events:any;
  unAssigned:any=0;
  inProgress:any=0;
  actionRequired:any=0;
    ngOnInit() {
     this.getData();
      console.log("Init Mission");
     // console.log(this.events);
      jQuery(this.elRef.nativeElement).find('.svg-convert').svgConvert();
      jQuery.getScript('./assets/javascripts/custom/main-index.js', function(){
      });
    }
    getData(){
      let self=this;
     let headers= new HttpHeaders();
      this._commonDataService.getData(apiData.url+apiData.facility,headers).subscribe((res:any)=>{
        let data=[];
        res.facilitiesInfo.map(function(i,j){
                let self=i;
                return i.eventActivities.map(function(t,y){
                if(t.activity!="Closed"){ 
                    t.facilityName=self.name;
                    data.push(t)
                }
              })
        })
        console.log(data)
       
        data.map(function(e,j){
         e.sensor[0].type=self.image[parseInt(e.sensor[0].type==null?"1":e.sensor[0].type)]
         switch(e.activity){
             case "UnAssigned":
             self.unAssigned++;
         break;
           case"In Progress":
          self.inProgress++;
         break;
           case"Action Required":
           self.actionRequired++;
         break;
         }
         })
         this.events= data;
      })
    }
    ngAfterViewInit(){
      jQuery.getScript('./assets/javascripts/custom/eventGrid.js', function(){
      });
      
    }
}

