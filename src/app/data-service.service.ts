import { Injectable } from '@angular/core';
import { LatestAlerts } from './model/latestAlerts';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FacilityComponent } from './facility/facility.component';
import { Clients } from './model/Clients';
import {apiData} from './common';
@Injectable()
export class DataServiceService {
  palleteColors = {
    mice: "#1c37c6",
    houseFly: "#3642ea",
    cockroach: "#5a7382",
    instar: "#5dcf98",
    adultBedBug: "#4ca3ae",
    bottleFly: "#573bce",
    rats: "#4c78c3"
  };
  constructor(private _http:HttpClient) { }
  //All ALerts
  getALerts() {
    let data = [];
    let cid: any;
    let fid: any;
    let final: any;
    LatestAlerts.map(function (e, x) {
      cid = e.ClientID;
      return e.Facilities.map(function (i, j) {
        fid = i.FacilityName;
        return i.Alerts.map(function (m, n) {
          final = m;
          final.ClientId = cid;
          final.FacilityId = fid;
          data.push(final);
        })
      })
    });
    console.log(typeof (data));
    return data;
  }
  //Individual Clients
  getClients(id: string) {
    return LatestAlerts.filter(function (e, x) { if (e.ClientID == id) { return e } })
  }
  //all alerts under single Client
  getAlertsF(id: string) {
    let client: any;
    let alerts = [];
    let cid: any;
    let fid: any;
    let final: any;
    client = LatestAlerts.filter(function (e, x) {
      if (e.ClientID == id) {
        return e
      }
    });
    client.filter(function (i, j) {
      cid = i.ClientID;
      return i.Facilities.map(function (m, n) {
        fid = m.FacilityName;
        return m.Alerts.map(function (a, b) {
          final = a;
          final.ClientId = cid;
          final.FacilityId = fid;
          alerts.push(final);
        })
      })
    })
    return alerts;
  }
  //Get Single Facility
  getFacilty(clientId, facilityId) {
    let client: any;
    let final: any;
    let facility = [];
    LatestAlerts.filter(function (e, x) {
      if (e.ClientID == clientId) {
        e.Facilities.filter(function (i, j) {
          if (i.FacilityName == facilityId) {
            facility.push(i);
          }
        })
      }
    })
    console.log("Maping")
    facility.map(function (e, x) {
      console.log("first")
      e.Alerts.map(function (i, j) {
        console.log("Second")
        i.ClientId = clientId;
        i.FacilityId = facilityId
      })
    })
    console.log(facility)
    return facility;
  }

  //Get Individual Alert
  getALertsI(clientId, facilityId, alertId) {
    let final: any;
    let allAlerts = this.getAlertsF(clientId);
    return allAlerts.filter(function (e, x) {
      if (e.Id == alertId) {
        return e;
      }

    })
  }
  getMapData() {
     return this._http.get(apiData.url+"/"+apiData.client)
    // let data = {
    //   "type": "map",
    //   "dragMap": true,
    //   "projection": "mercator",
    //   "areasSettings": {
    //     "autoZoom": true,
    //     "rollOverOutlineColor": "#595959",
    //     "rollOverColor": undefined,
    //     "selectedColor": "#595959",
    //     "outlineAlpha": 1,
    //     "outlineColor": "",
    //     "outlineThickness": 1,
    //     "color": undefined,
    //     "pattern": {
    //       "url": "../../assets/images/patterns/new-pattern.svg",
    //       "width": 4,
    //       "height": 4
    //     }
    //   },
    //   "imagesSettings": {
    //     "rollOverScale": 1.5,
    //     "selectedScale": 1,
    //   },
    //   "dataProvider": {
    //     "map": "japanLow",
    //     "getAreasFromMap": true,
    //     "images": [{
    //       "imageURL": "assets/images/facility-inactive.png",
    //       "zoomLevel": 5,
    //       "title": "Nestle Osaka",
    //       "latitude": 34.5547,
    //       "longitude": 135.502,
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-active.png",
    //       "zoomLevel": 5,
    //       "title": "Nestle Kobe",
    //       "latitude": 34.6924,
    //       "longitude": 134.8998,     
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-active.png",
    //       "zoomLevel": 5,
    //       "title": "Nestle Tokyo",
    //       "latitude": 35.6772,
    //       "longitude": 139.6995,
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-inactive.png",
    //       "zoomLevel": 5,
    //       "title": "Nestle osaka East",
    //       "latitude": 34.4922,
    //       "longitude": 135.5469,
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-inactive.png",
    //       "zoomLevel": 5,
    //       "title": "Nestle tokyo East",
    //       "latitude": 35.7123,
    //       "longitude": 139.2155,
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-inactive.png",
    //       "zoomLevel": 5,
    //       "title": "Hilton Tokyo Narita",
    //       "latitude": 36.1684,
    //       "longitude": 139.8592,
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-active.png",
    //       "zoomLevel": 5,
    //       "title": "Hilton Tokyo",
    //       "latitude": 35.6772,
    //       "longitude": 139.3361,
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-inactive.png",
    //       "zoomLevel": 5,
    //       "title": "Hilton Resort",
    //       "latitude": 35.1485,
    //       "longitude": 139.0941,
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-inactive.png",
    //       "zoomLevel": 5,
    //       "title": "Hilton Osaka",
    //       "latitude": 34.7125,
    //       "longitude": 135.4507,
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-active.png",
    //       "zoomLevel": 5,
    //       "title": "Hilton Nagoya",
    //       "latitude": 35.0463,
    //       "longitude": 136.6835,
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-inactive.png",
    //       "zoomLevel": 5,
    //       "title": "Yoshinoya Okinawa North",
    //       "latitude": 26.6003,
    //       "longitude": 128.0491,
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-inactive.png",
    //       "zoomLevel": 5,
    //       "title": "Yoshinoya Okinawa South",
    //       "latitude": 28.2218,
    //       "longitude": 129.3621,
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-inactive.png",
    //       "zoomLevel": 5,
    //       "title": "Yoshinoya Ehime",
    //       "latitude": 33.9472,
    //       "longitude": 132.8602,
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-active.png",
    //       "zoomLevel": 5,
    //       "title": "Yoshinoya InshiKawa",
    //       "latitude": 36.7116,
    //       "longitude": 136.7452,
    //       "width": 30,
    //       "height": 30
    //     }, {
    //       "imageURL": "assets/images/facility-inactive.png",
    //       "zoomLevel": 5,
    //       "title": "Yoshinoya Yamanashi",
    //       "latitude": 35.6874,
    //       "longitude": 138.7184,
    //       "width": 30,
    //       "height": 30
    //     }],
    //   },
    //   "zoomControl": {
    //     "panControlEnabled": false,
    //     "zoomControlEnabled": false,
    //     "homeButtonEnabled": true,
    //     "panStepSize": 1.5
    //   },
    //   "export": {
    //     "enabled": true
    //   },
    //   "listeners": [{
    //     "event": "rendered",
    //     "method": function (e) {
    //       var map = e.chart;
    //       map.initialZoomLevel = map.zoomLevel(3);
    //       map.initialZoomLatitude = map.zoomLatitude();
    //       map.initialZoomLongitude = map.zoomLongitude();
    //       map.zoomIn();
    //     }
    //   }],
    // }
    // return data;
  }
  getPest30ChartData() {
    let data = {

      chart: {
        type: 'column'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },

      title: { text: '' },
      series: [{
        name: 'Rat',
        data: [10, 2, 5, 2, 6, 1, 7, 4, 10, 1, 8, 1]
      }, {
        name: 'Mouse',
        data: [1, 7, 9, 9, 4, 8, 6, "", 5, 9, 2, 2]
      }, {
        name: 'Bottle fly',
        data: [4, 9, 1, "", 10, 7, 10, 3, 9, 3, 9, 1]
      },
      {
        name: 'House fly',
        data: [1, 5, 10, 4, 5, "", 4, 9, 6, 9, 7, 2]
      },
      {
        name: 'Adult Bed Bug',
        data: [6, 1, 6, 2, 9, 5, 6, 4, 1, 8, 10, 1]
      },
      {
        name: 'Instar Bed Bug',
        data: [10, "", 6, 4, 1, 7, 4, 1, 10, 4, 4]
      },
      {
        name: 'Cockroach',
        data: [4, 2, 7, 10, 7, 7, 1, 6, 4, 2, ""]
      }],
      xAxis: {
        categories: ['December', 'January', '	February', '	March', '	April', '	May', '	June', '	July', '	August', '	September', '	October', '	November'],
        title: {
          text: "Month"
        },
      },
      colors: [this.palleteColors.rats, this.palleteColors.mice, this.palleteColors.bottleFly, this.palleteColors.adultBedBug, this.palleteColors.cockroach, this.palleteColors.houseFly, this.palleteColors.instar]
    }
    return data;
  }
  getPest12ChartData() {
    let data = {

      chart: {
        type: 'column'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },

      title: { text: '' },
      series: [{
        name: 'Rat',
        data: [5, "", "", "", "", "", "", 1, "", ""]
      }, {
        name: 'Mouse',
        data: [2, "", "", "", 3, "", "", 1, "", ""]
      }, {
        name: 'Bottle fly',
        data: ["", "", "", "", "", 2, "", "", "", ""]
      },
      {
        name: 'House fly',
        data: ["", "", 7, "", "", "", "", "", "", ""]
      },
      {
        name: 'Adult Bed Bug',
        data: ["", 7, 4, 8, "", 4, 2, "", 1, 1]
      },
      {
        name: 'Instar Bed Bug',
        data: ["", 6, "", 2, "", "", 2, "", 1, ""]
      },
      {
        name: 'Cockroach',
        data: [8, "", "", "", 4, "", "", "", "", ""]
      }],
      xAxis: {
        categories: ['Nestle Osaka East', 'hilton Tokyo', 'Hilton Resort',
          'Yoshinoya Okinawa', 'Hilton Nogoya', 'Nestle Kobe',
          'hilton Resort', 'Nestle Osaka', 'Ehime', 'Okinowa'],
        title: {
          text: "Facility"
        },
      },
      colors: [this.palleteColors.rats, this.palleteColors.mice, this.palleteColors.bottleFly, this.palleteColors.adultBedBug, this.palleteColors.cockroach, this.palleteColors.houseFly, this.palleteColors.instar]
    }
    return data;
  }
  getGuageData(num, measure,title1,title2) {
    console.log(num);
    let gaugeOptions = {
      navigation: {
        buttonOptions: {
          enabled: false
        }
      },
      chart: {
        type: 'solidgauge'
      },
      title: null,
      pane: {
        center: ['50%', '85%'],
        size: '130%',
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor: '#8c8f9c',
          innerRadius: '85%',
          outerRadius: '100%',
          shape: 'arc',
          borderWidth: 0,
        }
      },
      tooltip: {
        enabled: false
      },
      // the value axis

      plotOptions: {
        solidgauge: {
          innerRadius: '85%',
          dataLabels: {
            y: 40,
            borderWidth: 0,
            useHTML: true
          }
        }
      },
      yAxis: {
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 0,
        visible: false,
        title: {
          y: 65
        },
        labels: {
          y: 50
        },
        min: 0,
        max: 100,
        stops: [
          [1, '#2b5cff']
        ],
      },

      credits: {
        enabled: false
      },
      series: [{
        name: 'tasks',
        data: [num],
        dataLabels: {
          format: '<div class="chart-labels"><span class="value font-02">{y}' + measure + '</span><br/>' +
            '<span class="title font-02">'+title1+'<br>'+title2+'</span></div>'
        }
      }]

    };

    return gaugeOptions;
  }
  getClientsStack(){
    return Clients;
  }
  getClientMapData(id){
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
        "images": [{
          "imageURL": "assets/images/facility-inactive.png",
          "zoomLevel": 5,
          "title": "Nestle Osaka",
          "latitude": 34.5547,
          "longitude": 135.502,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-active.png",
          "zoomLevel": 5,
          "title": "Nestle Kobe",
          "latitude": 34.6924,
          "longitude": 134.8998,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-active.png",
          "zoomLevel": 5,
          "title": "Nestle Tokyo",
          "latitude": 35.6772,
          "longitude": 139.6995,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-inactive.png",
          "zoomLevel": 5,
          "title": "Nestle osaka East",
          "latitude": 34.4922,
          "longitude": 135.5469,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-inactive.png",
          "zoomLevel": 5,
          "title": "Nestle tokyo East",
          "latitude": 35.7123,
          "longitude": 139.2155,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-inactive.png",
          "zoomLevel": 5,
          "title": "Hilton Tokyo Narita",
          "latitude": 36.1684,
          "longitude": 139.8592,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-active.png",
          "zoomLevel": 5,
          "title": "Hilton Tokyo",
          "latitude": 35.6772,
          "longitude": 139.3361,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-inactive.png",
          "zoomLevel": 5,
          "title": "Hilton Resort",
          "latitude": 35.1485,
          "longitude": 139.0941,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-inactive.png",
          "zoomLevel": 5,
          "title": "Hilton Osaka",
          "latitude": 34.7125,
          "longitude": 135.4507,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-active.png",
          "zoomLevel": 5,
          "title": "Hilton Nagoya",
          "latitude": 35.0463,
          "longitude": 136.6835,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-inactive.png",
          "zoomLevel": 5,
          "title": "Yoshinoya Okinawa North",
          "latitude": 26.6003,
          "longitude": 128.0491,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-inactive.png",
          "zoomLevel": 5,
          "title": "Yoshinoya Okinawa South",
          "latitude": 28.2218,
          "longitude": 129.3621,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-inactive.png",
          "zoomLevel": 5,
          "title": "Yoshinoya Ehime",
          "latitude": 33.9472,
          "longitude": 132.8602,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-active.png",
          "zoomLevel": 5,
          "title": "Yoshinoya InshiKawa",
          "latitude": 36.7116,
          "longitude": 136.7452,
          "width": 30,
          "height": 30
        }, {
          "imageURL": "assets/images/facility-inactive.png",
          "zoomLevel": 5,
          "title": "Yoshinoya Yamanashi",
          "latitude": 35.6874,
          "longitude": 138.7184,
          "width": 30,
          "height": 30
        }],
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
          map.initialZoomLevel = map.zoomLevel(3);
          map.initialZoomLatitude = map.zoomLatitude();
          map.initialZoomLongitude = map.zoomLongitude();
          map.zoomIn();
        }
      }],
    }
    return data;
  }
}
