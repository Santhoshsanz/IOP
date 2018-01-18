import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormArray,Validators } from '@angular/forms';
import { CommonDataService } from '../../common-data.service';
import { apiData } from '../../common';
import { HttpHeaders } from '@angular/common/http'
import { HttpHeaderResponse } from '@angular/common/http/src/response';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ClientServiceService } from '../../client-service.service'
@Component({
  selector: 'app-edit-gateway',
  templateUrl: './gateway-editor.component.html'
})
export class GatewayEditorComponent implements OnInit {
  gateway: FormGroup;
  id: any;
  clients: any;
  facilities: any;
  zonesList:any;
  clientSelectedVal: any;
  facilitySelectedVal: any;
  zoneSelectedVal:any;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private _commonDataService: CommonDataService, private _location: Location, private clientService: ClientServiceService) { }
  ngOnInit() {
    this.gateway = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", [Validators.required,Validators.pattern("^[A-Za-z 0-9'.]{2,30}$")]),
      ip:new FormControl("", [Validators.required,Validators.pattern("^[0-9.a-zA-Z ]{2,50}$")]),
      hostName: new FormControl("", [Validators.required,Validators.pattern("^[A-Za-z 0-9'.]{2,30}$")]),
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
      else{
        this.getClients();
      }
    })
  }
  onSubmit(gateway) {
    let header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin", "*");
    this._commonDataService.postData(gateway.value, apiData.url + "/" + apiData.gateway, header).subscribe((res: any) => {
      this._location.back();
    })
  }
  editGateway(id) {
    let self=this;
    console.log("Edit ZOne")
    let temp = this.gateway.getRawValue();
    let header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin", "*");
    let currentFacility = this._commonDataService.getData(apiData.url + "/" + apiData.gateway + "/" + id, header).subscribe((res: any) => {
      temp.id = res.GatewayInfo.id;
      temp.ip=res.GatewayInfo.ip;
      temp.name = res.GatewayInfo.name;
      temp.hostName = res.GatewayInfo.hostName;
      temp.client.id = res.GatewayInfo.client.id;
      temp.facility.id = res.GatewayInfo.facility.id;
      temp.client.name = res.GatewayInfo.client.name;
      temp.facility.name = res.GatewayInfo.facility.name;
      temp.zone.name = res.GatewayInfo.zone.name;
      temp.zone.id = res.GatewayInfo.zone.id;
      console.log(res.GatewayInfo.zone.id);
      this.clientSelectedVal = res.GatewayInfo.client.id;
      this.facilitySelectedVal = res.GatewayInfo.facility.id;
      this.zoneSelectedVal=res.GatewayInfo.zone.id;
      this.gateway.setValue(temp);
      this.clientService.getAllClients().subscribe((res: any) => {
        this.clients = res.clientsInfo;
      })
      this._commonDataService.getData(apiData.url + "/" + apiData.client + "/" + this.clientSelectedVal, header).subscribe((res:any)=>{
          self.facilities=res.clientInfo.facilities;
      })
      this._commonDataService.getData(apiData.url + "/" + apiData.facility + "/" + this.facilitySelectedVal, header).subscribe((res:any)=>{
        self.zonesList=res.facilityInfo.zones;
        console.log(this.zonesList);
    })
    });
  }
  getClients() {
    this.clientService.getAllClients().subscribe((res: any) => {
      let self=this;
      this.clients = res.clientsInfo;
      this.facilities = this.clients[0].facilities;
      let headers = new HttpHeaders();
      this._commonDataService.getData(apiData.url+apiData.facility+"/"+this.facilities[0].id,headers).subscribe((res:any)=>{
        self.zonesList=res.facilityInfo.zones; 
        let temp = this.gateway.getRawValue();
        temp.zone.id=self.zonesList[0].id;
        temp.zone.name=self.zonesList[0].name;
        this.gateway.setValue(temp)
      })
      if (!this.id) {
        let temp = this.gateway.getRawValue();
        temp.client.name = this.clients[0].name;
        temp.client.id = this.clients[0].id;
        if (this.facilities) {
          temp.facility.name = this.facilities[0].name;
          temp.facility.id = this.facilities[0].id;
        }
        this.gateway.setValue(temp);
        console.log(this.facilities);
      }

    })

  }
  onClientChange(event) {
    let self=this;
    let headers = new HttpHeaders();
    let temp = this.gateway.getRawValue();
    temp.client.name = event.source.triggerValue;
    temp.client.id = event.value;
    this.clients.filter(function(e,f){
      if(e.id==event.value) {
      self.facilities=e.facilities;
      }
      })
    if (this.facilities) {
      temp.facility.name = this.facilities[0].name;
      temp.facility.id = this.facilities[0].id;
      this._commonDataService.getData(apiData.url+apiData.facility+"/"+this.facilities[0].id,headers).subscribe((res:any)=>{
        self.zonesList=res.facilityInfo.zones; 
        let temp = this.gateway.getRawValue();
        temp.zone.id=self.zonesList[0].id;
        temp.zone.name=self.zonesList[0].name;
        this.gateway.setValue(temp)
      })
    }
    else {
      temp.facility.name = "";
      temp.facility.id = "";
      temp.zone.id="";
      temp.zone.name="";
      this.zonesList=[];
    }
    this.gateway.setValue(temp);
  }
  onFacilityChange(event) {
    let self=this;
    let headers = new HttpHeaders();
    let temp = this.gateway.getRawValue();
    temp.facility.name = event.source.triggerValue;
    temp.facility.id = event.value;
    this.gateway.setValue(temp);
    this._commonDataService.getData(apiData.url+apiData.facility+"/"+temp.facility.id,headers).subscribe((res:any)=>{
      let temp = this.gateway.getRawValue();
     if(res.facilityInfo){
      if(res.facilityInfo.zones!=null){
        if(res.facilityInfo.zones.length>0){
          self.zonesList=res.facilityInfo.zones; 
          temp.zone.id=self.zonesList[0].id;
          temp.zone.name=self.zonesList[0].name;
        }
        else {
          self.zonesList=[];
          temp.zone.name = "";
          temp.zone.id = "";
        }
      }
      else{
        self.zonesList=[];
        temp.zone.name = "";
        temp.zone.id = "";
      }
      this.gateway.setValue(temp)
     }
    })
  }
  onZoneChange(event){
    let temp = this.gateway.getRawValue();
    temp.zone.name = event.source.triggerValue;
    temp.zone.id = event.value;
    this.gateway.setValue(temp);
  }
}
