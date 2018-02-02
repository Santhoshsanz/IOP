import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CommonDataService } from '../../common-data.service';
import { apiData } from '../../common';
import { HttpHeaders } from '@angular/common/http'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-gateway',
  templateUrl: './gateway-editor.component.html'
})
export class GatewayEditorComponent implements OnInit {
  gateway: FormGroup;
  id: any;
  clients: any;
  facilities: any;
  zonesList: any;
  clientSelectedVal: any;
  facilitySelectedVal: any;
  zoneSelectedVal: any;
  disabbleBtn: boolean;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, 
    private _commonDataService: CommonDataService, private _location: Location) { }
  ngOnInit() {
    this.gateway = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", [Validators.required, Validators.pattern("^[A-Za-z 0-9-'.]{2,30}$")]),
      ip: new FormControl("", [Validators.required, Validators.pattern("^[0-9.a-zA-Z ]{2,50}$")]),
      hostName: new FormControl("", [Validators.required, Validators.pattern("^[A-Za-z -0-9'.]{2,30}$")]),
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
      })
    })
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.editGateway(this.id);
      }
      else {
        this.getClients();
      }
    })
  }
  onSubmit(gateway) {
    let header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin", "*");
    this._commonDataService.postData(gateway.value, apiData.url + apiData.gateway, header).subscribe((res: any) => {
      if (res.status == "ok") {
        this._location.back();
      }
      else {

      }

    })
  }
  editGateway(id) {
    let self = this;
    //console.log("Edit ZOne")
    let temp = this.gateway.getRawValue();
    let header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin", "*");
    let currentFacility = this._commonDataService.getData(apiData.url + apiData.gateway + id, header).subscribe((res: any) => {
      if (res.status == "ok") {
        temp.id = res.gatewayInfo.id;
        temp.ip = res.gatewayInfo.ip;
        temp.name = res.gatewayInfo.name;
        temp.hostName = res.gatewayInfo.hostName;
        temp.client.id = res.gatewayInfo.client.id;
        temp.facility.id = res.gatewayInfo.facility.id;
        temp.client.name = res.gatewayInfo.client.name;
        temp.facility.name = res.gatewayInfo.facility.name;
        temp.zone.name = res.gatewayInfo.zone.name;
        temp.zone.id = res.gatewayInfo.zone.id;
        //console.log(res.gatewayInfo.zone.id);
        this.clientSelectedVal = res.gatewayInfo.client.id;
        this.facilitySelectedVal = res.gatewayInfo.facility.id;
        this.zoneSelectedVal = res.gatewayInfo.zone.id;
        this.gateway.setValue(temp);
        this._commonDataService.getData(apiData.url+apiData.client,header).subscribe((res: any) => {
          if (res.status == "ok") {
            this.clients = res.clientsInfo;
          } else {

          }
        })
        this._commonDataService.getData(apiData.url + apiData.client + this.clientSelectedVal, header).subscribe((res: any) => {
          if (res.status == "ok") {
            self.facilities = res.clientInfo.facilities;
          } else {

          }
        })
        this._commonDataService.getData(apiData.url + apiData.facility + this.facilitySelectedVal, header).subscribe((res: any) => {
          if (res.status == "ok") {
            self.zonesList = res.facilityInfo.zones;
          } else {

          }
        })
      }
    });
  }
  getClients() {
    let header = new HttpHeaders();
    this._commonDataService.getData(apiData.url+apiData.client,header).subscribe((res: any) => {
      let self = this;
      this.clients = res.clientsInfo;
      this.facilities = this.clients[0].facilities;
      if (this.facilities) {
        this._commonDataService.getData(apiData.url + apiData.facility + this.facilities[0].id, header).subscribe((res: any) => {
         if(res.status=="ok"){
          self.zonesList = res.facilityInfo.zones;
          let temp = this.gateway.getRawValue();
          temp.zone.id = self.zonesList[0].id;
          temp.zone.name = self.zonesList[0].name;
          this.gateway.setValue(temp)
         }
         else{

         }
        })
      }
      if (!this.id) {
        let temp = this.gateway.getRawValue();
        temp.client.name = this.clients[0].name;
        temp.client.id = this.clients[0].id;
        if (this.facilities) {
          temp.facility.name = this.facilities[0].name;
          temp.facility.id = this.facilities[0].id;
        }
        this.gateway.setValue(temp);
        //console.log(this.facilities);
      }

    })

  }
  onClientChange(event) {
    let self = this;
    let headers = new HttpHeaders();
    let temp = this.gateway.getRawValue();
    temp.client.name = event.source.triggerValue;
    temp.client.id = event.value;
    this.clients.filter(function (e, f) {
      if (e.id == event.value) {
        self.facilities = e.facilities;
      }
    })
    if (this.facilities) {
      temp.facility.name = this.facilities[0].name;
      temp.facility.id = this.facilities[0].id;
      this._commonDataService.getData(apiData.url + apiData.facility + this.facilities[0].id, headers).subscribe((res: any) => {
       if(res.status=="ok"){
        self.zonesList = res.facilityInfo.zones;
        let temp = this.gateway.getRawValue();
        temp.zone.id = self.zonesList[0].id;
        temp.zone.name = self.zonesList[0].name;
        this.gateway.setValue(temp)
       }
       else{

       }
      })
    }
    else {
      temp.facility.name = "";
      temp.facility.id = "";
      temp.zone.id = "";
      temp.zone.name = "";
      this.zonesList = [];
    }
    this.gateway.setValue(temp);
  }
  onFacilityChange(event) {
    let self = this;
    let headers = new HttpHeaders();
    let temp = this.gateway.getRawValue();
    temp.facility.name = event.source.triggerValue;
    temp.facility.id = event.value;
    this.gateway.setValue(temp);
    this._commonDataService.getData(apiData.url + apiData.facility + temp.facility.id, headers).subscribe((res: any) => {
     if(res.status=="ok"){
      let temp = this.gateway.getRawValue();
      if (res.facilityInfo) {
        if (res.facilityInfo.zones != null) {
          if (res.facilityInfo.zones.length > 0) {
            self.zonesList = res.facilityInfo.zones;
            temp.zone.id = self.zonesList[0].id;
            temp.zone.name = self.zonesList[0].name;
          }
          else {
            self.zonesList = [];
            temp.zone.name = "";
            temp.zone.id = "";
          }
        }
        else {
          self.zonesList = [];
          temp.zone.name = "";
          temp.zone.id = "";
        }
        this.gateway.setValue(temp)
      }
     }else{}
    })
  }
  onZoneChange(event) {
    let temp = this.gateway.getRawValue();
    temp.zone.name = event.source.triggerValue;
    temp.zone.id = event.value;
    this.gateway.setValue(temp);
  }
}
