import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CommonDataService } from '../../common-data.service';
import { apiData } from '../../common';
import { HttpHeaders } from '@angular/common/http'
import { HttpHeaderResponse } from '@angular/common/http/src/response';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-sensor',
  templateUrl: './sensor-editor.component.html'
})
export class SensorEditorComponent implements OnInit {
  disabbleBtn: boolean;
  sensor: FormGroup;
  id: any;
  selectedType: any;
  clients: any;
  facilities: any;
  zonesList: any;
  clientSelectedVal: any;
  facilitySelectedVal: any;
  zoneSelectedVal: any;
  gatewaySelectedVal: any;
  gatewayList: any
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
    private _commonDataService: CommonDataService, private _location: Location) { }
  ngOnInit() {
    this.sensor = new FormGroup({
      id: new FormControl(),
      sensorId: new FormControl("", [Validators.required, Validators.pattern("^[A-Za-z 0-9'.]{2,30}$")]),
      type: new FormControl("", Validators.required),
      client: this.formBuilder.group({
        id: "",
        name: ""
      }),
      facility: this.formBuilder.group({
        id: "",
        name: ""
      }),
      zone: this.formBuilder.group({
        id: "",
        name: ""
      }),
      gateway: this.formBuilder.group({
        id: "",
        name: ""
      })
    })
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.editSensor(this.id);
        this.getClients()
      }
    })

  }
  onSubmit(sensor) {
    let header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin", "*");
    this._commonDataService.postData(sensor.value, apiData.url + apiData.sensor, header).subscribe((res: any) => {
      this._location.back();
    })
  }
  // editSensor(id) {
  //   //console.log(this.clients);
  //   //console.log(this.facilities);
  //   //console.log(this.zonesList);
  //   //console.log(this.gatewayList);
  //   //console.log("Edit Sensor")
  //   let temp = this.sensor.getRawValue();
  //   let header = new HttpHeaders();
  //   header.append("Access-Control-Allow-Origin", "*");
  //   this._commonDataService.getData(apiData.url + apiData.sensor + id, header).subscribe((res: any) => {
  //     temp.id = res.sensorInfo.id;
  //     temp.type=res.sensorInfo.type;
  //     temp.sensorId = res.sensorInfo.sensorId;
  //     temp.type = res.sensorInfo.type;
  //     temp.client.id = res.sensorInfo.client.id;
  //     temp.facility.id = res.sensorInfo.facility.id;
  //     temp.client.name = res.sensorInfo.client.name;
  //     temp.facility.name = res.sensorInfo.facility.name;
  //     temp.zone.name = res.sensorInfo.zone.name;
  //     temp.zone.id = res.sensorInfo.zone.id;
  //     temp.gateway.name = res.sensorInfo.gateway.name;
  //     temp.gateway.id = res.sensorInfo.gateway.id;
  //     this.clientSelectedVal = res.sensorInfo.client.id;
  //     this.facilitySelectedVal = res.sensorInfo.facility.id;
  //     this.zoneSelectedVal = res.sensorInfo.zone.id;
  //     this.gatewaySelectedVal = res.sensorInfo.gateway.id;
  //     this.selectedType = res.sensorInfo.gateway.type;
  //     this.sensor.setValue(temp);
  //     //Clients
  //     this.clientService.getAllClients().subscribe((res: any) => {
  //       this.clients = res.clientsInfo;
  //     })
  //     //Facilities
  //     this._commonDataService.getData(apiData.url + apiData.client + this.clientSelectedVal, header).subscribe((res:any) => {
  //         this.facilities=res.clientInfo.facilities;
  //     });
  //     //Zones
  //     this._commonDataService.getData(apiData.url + apiData.facility + this.facilitySelectedVal, header).subscribe((res:any) => {
  //       this.zonesList=res.facilityInfo.zones;
  //     });
  //     //Gateways
  //     this._commonDataService.getData(apiData.url + apiData.zone + this.zoneSelectedVal, header).subscribe((res:any) => {
  //       this.gatewayList=res.zoneInfo.gateways;
  //     });
  //   });
  // }

  editSensor(id) {
    let temp = this.sensor.getRawValue();
    temp.sensorId = id;
    this.sensor.setValue(temp);
    this.getClients()
  }



  getClients() {
    let self = this;
    let headers = new HttpHeaders();
    this._commonDataService.getData(apiData.url + apiData.client, headers).subscribe((res: any) => {
      self.clients = res.clientsInfo;
      self.facilities = this.clients[0].facilities;
      let headers = new HttpHeaders();
      this._commonDataService.getData(apiData.url + apiData.facility + this.facilities[0].id, headers).subscribe((res: any) => {
        self.zonesList = res.facilityInfo.zones;
        let temp = this.sensor.getRawValue();
        temp.zone.id = self.zonesList[0].id;
        temp.zone.name = self.zonesList[0].name;
        self.sensor.setValue(temp);
        this._commonDataService.getData(apiData.url + apiData.zone + self.zonesList[0].id, headers).subscribe((res: any) => {
          self.gatewayList = res.zoneInfo.gateways;
          let temp = this.sensor.getRawValue();
          temp.gateway.id = self.gatewayList[0].id;
          temp.gateway.name = self.gatewayList[0].name;
          self.sensor.setValue(temp)
        })
      })
      let temp = this.sensor.getRawValue();
      temp.client.name = this.clients[0].name;
      temp.client.id = this.clients[0].id;
      if (this.facilities) {
        temp.facility.name = this.facilities[0].name;
        temp.facility.id = this.facilities[0].id;
      }
      this.sensor.setValue(temp);
      //console.log(this.facilities);
    })
  }



  onClientChange(event) {
    let self = this;
    let headers = new HttpHeaders();
    let temp = this.sensor.getRawValue();
    temp.client.name = event.source.triggerValue;
    temp.client.id = event.value;
    //this.facilities = this.clients[event.target.selectedIndex].facilities;
    this.clients.filter(function (e, f) {
      if (e.id == event.value) {
        self.facilities = e.facilities;
      }
    })
    if (this.facilities) {
      temp.facility.name = this.facilities[0].name;
      temp.facility.id = this.facilities[0].id;
      this._commonDataService.getData(apiData.url + apiData.facility + this.facilities[0].id, headers).subscribe((res: any) => {
        self.zonesList = res.facilityInfo.zones;
        let temp = this.sensor.getRawValue();
        temp.zone.id = self.zonesList[0].id;
        temp.zone.name = self.zonesList[0].name;
        this.sensor.setValue(temp)
        this._commonDataService.getData(apiData.url + apiData.zone + this.zonesList[0].id, headers).subscribe((res: any) => {
          //console.log(res);
          self.gatewayList = res.zoneInfo.gateways;
          let temp = this.sensor.getRawValue();
          temp.gateway.id = self.gatewayList[0].id;
          temp.gateway.name = self.gatewayList[0].name;
          this.sensor.setValue(temp)
        })
      })
    }
    else {
      temp.facility.name = "";
      temp.facility.id = "";
      temp.zone.id = "";
      temp.zone.name = "";
      this.zonesList = [];
    }
    this.sensor.setValue(temp);
  }
  onFacilityChange(event) {
    let self = this;
    let headers = new HttpHeaders();
    let temp = this.sensor.getRawValue();
    temp.facility.name = event.source.triggerValue;
    temp.facility.id = event.value;
    this.sensor.setValue(temp);
    this._commonDataService.getData(apiData.url + apiData.facility + temp.facility.id, headers).subscribe((res: any) => {
      let temp = this.sensor.getRawValue();
      if (res.facilityInfo) {
        if (res.facilityInfo.zones != null) {
          if (res.facilityInfo.zones.length > 0) {
            //console.log(res.facilityInfo.zones)
            self.zonesList = res.facilityInfo.zones;
            temp.zone.id = self.zonesList[0].id;
            temp.zone.name = self.zonesList[0].name;
            self.sensor.setValue(temp);
            //Set gateway Initail Val Drop Down
            this._commonDataService.getData(apiData.url + apiData.zone + temp.zone.id, headers).subscribe((res: any) => {
              let self = this;
              let temp = self.sensor.getRawValue();
              if (res.zoneInfo != null) {
                if (res.zoneInfo.gateways != null || res.zoneInfo.gateways.length > 0) {
                  self.gatewayList = res.zoneInfo.gateways;
                  temp.gateway.name = self.gatewayList[0].name;
                  temp.gateway.id = self.gatewayList[0].id;
                  self.sensor.setValue(temp);
                }
                else {
                  self.gatewayList = [];
                  temp.gateway.name = "";
                  temp.gateway.id = "";
                  self.sensor.setValue(temp);
                }
              } else {
                self.zonesList = [];
                temp.gateway.name = "";
                temp.gateway.id = "";
                self.sensor.setValue(temp);
              }
            })
          }
          else {
            self.zonesList = [];
            temp.zone.name = "";
            temp.zone.id = "";
            self.sensor.setValue(temp);
          }
        }
        else {
          self.zonesList = [];
          temp.zone.name = "";
          temp.zone.id = "";
          self.sensor.setValue(temp);
        }
      }
    })
  }
  onZoneChange(event) {
    let self = this;
    let temp = this.sensor.getRawValue();
    let headers = new HttpHeaders();
    temp.zone.name = event.source.triggerValue;
    temp.zone.id = event.value;
    this.sensor.setValue(temp);
    this._commonDataService.getData(apiData.url + apiData.zone + event.value, headers).subscribe((res: any) => {
      let temp = this.sensor.getRawValue();
      if (res.zoneInfo) {
        if (res.zoneInfo.gateways != null) {
          if (res.zoneInfo.gateways.length > 0) {
            self.gatewayList = res.zoneInfo.gateways;
            temp.gateway.id = self.gatewayList[0].id;
            temp.gateway.name = self.gatewayList[0].name;
            this.sensor.setValue(temp)
          }
          else {
            self.gatewayList = [];
            temp.gateway.name = "";
            temp.gateway.id = "";
            this.sensor.setValue(temp)
          }
        }
        else {
          self.gatewayList = [];
          temp.gateway.name = "";
          temp.gateway.id = "";
          this.sensor.setValue(temp)
        }
        this.sensor.setValue(temp)
      }
      else {
        self.gatewayList = [];
        temp.gateway.name = "";
        temp.gateway.id = "";
        this.sensor.setValue(temp)
      }
    })
  }
  onGatewayChange(event) {
    let temp = this.sensor.getRawValue();
    temp.gateway.name = event.source.triggerValue;
    temp.gateway.id = event.value;
    this.sensor.setValue(temp);
  }
}
