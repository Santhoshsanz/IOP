import { Component, OnInit,EventEmitter ,Input,Output, SimpleChanges, OnChanges } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponentComponent implements OnChanges {
  @Input() facilityData: any;
  @Input() clientsData:any;
  @Output() dropDownEvent= new EventEmitter<any>();
  chart: any;
  constructor(private _amCharts: AmChartsService) { }
  ngOnChanges(changes: SimpleChanges) {
      // this.data.getMapData().subscribe((res:any)=>{
      //console.log("Inside")
      let intermediate = [];
      let pushData: any = {};
      if (this.facilityData.length > 0) {
        this.facilityData.map(function (e, o) {
          if (e.eventActivities != null) {
            //check any open activity
            let flag = 0
            e.eventActivities.filter(function (j, o) {
              if (j.activity != "Closed") {
                flag++;
              }
            })
            if (flag > 0) {
              pushData.imageURL = "assets/images/facility-active.png";
            }
            else {
              pushData.imageURL = "assets/images/facility-inactive.png";
            }
            flag = 0;
          }
          pushData.zoomLevel = 5,
            pushData.title = e.name,
            pushData.latitude = e.address.latitude,
            pushData.longitude = e.address.longitude,
            pushData.width = 30,
            pushData.height = 30
          intermediate.push(pushData)
          pushData = {};
        })
      }
      let data = {
        "type": "map",
        "dragMap": true,
        "projection": "mercator",
        "areasSettings": {
          "autoZoom": true,
          "rollOverOutlineColor": "#595959",
          "rollOverColor": undefined,
          "selectedColor": "#595959",
          "outlineAlpha": 1,
          "outlineColor": "",
          "outlineThickness": 1,
          "color": undefined,
          "pattern": {
            "url": "../../assets/images/patterns/new-pattern.svg",
            "width": 4,
            "height": 4
          }
        },
        "imagesSettings": {
          "rollOverScale": 1.5,
          "selectedScale": 1,
        },
        "dataProvider": {
          "map": "japanLow",
          "getAreasFromMap": true,
          "images": [],
        },
        "zoomControl": {
          "panControlEnabled": false,
          "zoomControlEnabled": false,
          "homeButtonEnabled": true,
          "panStepSize": 1.5
        },
        "export": {
          "enabled": true
        },
        "listeners": [{
          "event": "rendered",
          "method": function (e) {
            var map = e.chart;
            map.initialZoomLevel = map.zoomLevel(1);
            map.initialZoomLatitude = map.zoomLatitude();
            map.initialZoomLongitude = map.zoomLongitude();
            map.zoomOut();
          }
        }],
      }
      for (let i = 0; i < intermediate.length; i++) {
        data.dataProvider.images.push(intermediate[i]);
      }

      this.chart = this._amCharts.makeChart("mission-control-maps", data);
    
  }
  dropDownChange(clientId){
    this._amCharts.updateChart(this.chart, () => {
      this.chart.dataProvider = this.dataSet(clientId);
    });
  }
  dataSet(id){
    let newFacilityData=[];
      // this.data.getMapData().subscribe((res:any)=>{
      //console.log("Inside")
      let intermediate = [];
      let pushData: any = {};
      newFacilityData.push(this.facilityData.filter(function(z,y){
       if(z.client.id==id){
         return z;
       }
      }))
      console.log(newFacilityData)
      if (newFacilityData.length > 0) {
        newFacilityData.map(function (e, o) {
          debugger;
          if (e[0].eventActivities != null) {
            //check any open activity
            let flag = 0;
            e[0].eventActivities.filter(function (j, o) {
              if (j.activity != "Closed") {
                flag++;
              }
            })
            if (flag > 0) {
              pushData.imageURL = "assets/images/facility-active.png";
            }
            else {
              pushData.imageURL = "assets/images/facility-inactive.png";
            }
            flag = 0;
          }
          pushData.zoomLevel = 5,
            pushData.title = e[0].name,
            pushData.latitude = e[0].address.latitude,
            pushData.longitude = e[0].address.longitude,
            pushData.width = 30,
            pushData.height = 30
          intermediate.push(pushData)
          pushData = {};
        })
      }
      let data = {
        "type": "map",
        "dragMap": true,
        "projection": "mercator",
        "areasSettings": {
          "autoZoom": true,
          "rollOverOutlineColor": "#595959",
          "rollOverColor": undefined,
          "selectedColor": "#595959",
          "outlineAlpha": 1,
          "outlineColor": "",
          "outlineThickness": 1,
          "color": undefined,
          "pattern": {
            "url": "../../assets/images/patterns/new-pattern.svg",
            "width": 4,
            "height": 4
          }
        },
        "imagesSettings": {
          "rollOverScale": 1.5,
          "selectedScale": 1,
        },
        "dataProvider": {
          "map": "japanLow",
          "getAreasFromMap": true,
          "images": [],
        },
        "zoomControl": {
          "panControlEnabled": false,
          "zoomControlEnabled": false,
          "homeButtonEnabled": true,
          "panStepSize": 1.5
        },
        "export": {
          "enabled": true
        },
        "listeners": [{
          "event": "rendered",
          "method": function (e) {
            var map = e.chart;
            map.initialZoomLevel = map.zoomLevel(1);
            map.initialZoomLatitude = map.zoomLatitude();
            map.initialZoomLongitude = map.zoomLongitude();
            map.zoomOut();
          }
        }],
      }
      for (let i = 0; i < intermediate.length; i++) {
        data.dataProvider.images.push(intermediate[i]);
      }
      return data;
  }
}
