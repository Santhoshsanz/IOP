import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CommonDataService } from '../../common-data.service';
import { apiData } from '../../common';
import { HttpHeaders } from '@angular/common/http'
import { HttpHeaderResponse } from '@angular/common/http/src/response';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ClientServiceService } from '../../client-service.service'
@Component({
  selector: 'app-add-client',
  templateUrl: './zone-editor.component.html'
})
export class ZoneEditorComponent implements OnInit {
  zone: FormGroup;
  id: any;
  clients: any;
  facilities: any;
  clientSelectedVal: any
  facilitySelectedVal: any
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private _commonDataService: CommonDataService, private _location: Location, private clientService: ClientServiceService) { }
  ngOnInit() {
    this.zone = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", [Validators.required, Validators.pattern("^[A-Za-z 0-9'.]{2,30}$")]),
      image: new FormControl(""),
      imgType: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("^[a-z0-9'./]{2,30}$")]),
      client: this.formBuilder.group({
        id: "",
        name: ""
      }),
      facility: this.formBuilder.group({
        id: "",
        name: ""
      })
    })
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        console.log("param Zone")
        this.editZone(this.id);
      }
    })
    this.getClients()
  }
  getFiles(event) {
    var self = this;
    let temp: any;
    let type = event.target.files[0].type;
    var file: File = event.target.files[0];
    var myReader: FileReader = new FileReader();
    myReader.readAsDataURL(file);
    var resultSet = "";
    myReader.onloadend = function (e) {
      var columns = myReader.result.split(/\r\n|\r|\n/g);
      for (var i = 0; i < columns.length; i++) {
        resultSet = resultSet.concat(columns[i].split(' '));
      }
      temp = self.zone.getRawValue();
      temp.image = resultSet;
      temp.imgType = type;
      self.zone.setValue(temp);
    }
  }
  onSubmit(zone) {
    let header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin", "*");
    this._commonDataService.postData(zone.value, apiData.url + "/" + apiData.zone, header).subscribe((res: any) => {
      this._location.back();
    })
  }
  editZone(id) {
    console.log("Edit ZOne")
    let temp = this.zone.getRawValue();
    let header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin", "*");
    let currentFacility = this._commonDataService.getData(apiData.url + "/" + apiData.zone + "/" + id, header).subscribe((res: any) => {
      temp.id = res.zoneInfo.id;
      temp.name = res.zoneInfo.name;
      temp.image = res.zoneInfo.image;
      temp.client.id = res.zoneInfo.client.id;
      temp.facility.id = res.zoneInfo.facility.id;
      temp.client.name = res.zoneInfo.client.name;
      temp.facility.name = res.zoneInfo.facility.name;
      this.clientSelectedVal = res.zoneInfo.client.id;
      this.facilitySelectedVal = res.zoneInfo.facility.id;
      this.zone.setValue(temp);
      this._commonDataService.getData(apiData.url + "/" + apiData.client + "/" + temp.client.id, header).subscribe((res: any) => {
        this.facilities = res.clientInfo.facilities;
      })
    });
  }
  getClients() {
    this.clientService.getAllClients().subscribe((res: any) => {
      this.clients = res.clientsInfo;
      this.facilities = this.clients[0].facilities;
      if (!this.id) {
        let temp = this.zone.getRawValue();
        temp.client.name = this.clients[0].name;
        temp.client.id = this.clients[0].id;
        if (this.facilities) {
          temp.facility.name = this.facilities[0].name;
          temp.facility.id = this.facilities[0].id;
        }
        this.zone.setValue(temp);
        console.log(this.facilities);
      }

    })

  }
  onClientChange(event) {
    let self = this;
    let temp = this.zone.getRawValue();
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
    }
    else {
      temp.facility.name = "";
      temp.facility.id = "";
    }
    this.zone.setValue(temp);
  }
  onFacilityChange(event) {
    let temp = this.zone.getRawValue();
    temp.facility.name = event.source.triggerValue;
    temp.facility.id = event.value;
    this.zone.setValue(temp);
  }
}
