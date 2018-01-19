import { Component,ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Events } from '../app/model/alertsEvents';
import { apiData, images ,pestType} from '../app/common';
import { CommonDataService } from './../app/common-data.service'
import { HttpHeaders } from '@angular/common/http';
declare let jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('closeNotification') close: ElementRef;
  title = 'app';
  image = images;
  pest=pestType;
  newSensors:any=[];
  constructor(private elRef: ElementRef, private _commonDataService: CommonDataService) { }
  events: any=[];
  unAssigned: any = 0;
  inProgress: any = 0;
  actionRequired: any = 0;
  ngOnInit() {
    this.getData();
    console.log("Init Mission");
    // console.log(this.events);
    jQuery(this.elRef.nativeElement).find('.svg-convert').svgConvert();
    jQuery.getScript('./assets/javascripts/custom/main-index.js', function () {
    });
    this.getNewSensors();
  }
  getData() {
    let self = this;
    let headers = new HttpHeaders();
    this._commonDataService.getData(apiData.url + apiData.facility, headers).subscribe((res: any) => {
      if(res.status=="ok"){
      let data = [];
      res.facilitiesInfo.map(function (i, j) {
        let self = i;
        if (i.eventActivities != null) {
          if (i.eventActivities.length > 0) {
            return i.eventActivities.map(function (t, y) {
              if (t.activity != "Closed") {
                t.facilityName = self.name;
                data.push(t)
              }
            })
          }
        }


      })
      //console.log(data)

      data.map(function (e, j) {
        switch(e.sensor[0].type){
          case "Rodent":
          e.sensor[0].customImage=self.pest.Rodent;
          break;
        }
        switch (e.activity) {
          case "UnAssigned":
            self.unAssigned++;
            break;
          case "In Progress":
            self.inProgress++;
            break;
          case "Action Required":
            self.actionRequired++;
            break;
        }
      })
      this.events = data;
    }
    })
    
  }
  getNewSensors(){
    let headers=new HttpHeaders();
    this._commonDataService.getData(apiData.url+"sensor/new/879facea-57bc-4bda-872a-533b7d627c2b",headers)
    .subscribe((res:any)=>{
      this.newSensors=res.newlyAddedSensor;
      console.log(this.newSensors)
    })
  }
  ngAfterViewInit() {
    jQuery.getScript('./assets/javascripts/custom/eventGrid.js', function () {
    });

  }
  closeNoti(){
    debugger;
    let el: HTMLElement = this.close.nativeElement as HTMLElement;
    el.click();
  }
}

