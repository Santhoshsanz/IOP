import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CommonDataService } from '../../common-data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from "@angular/common/http";
import { Location } from "@angular/common"
import { apiData } from '../../common';
import { DISABLED } from '@angular/forms/src/model';

declare let jQuery: any;


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: FormGroup;
  disabbleBtn: boolean;
  constructor(private formBuilder: FormBuilder, private _commonDataService: CommonDataService, private _location: Location,
    private _route: ActivatedRoute) { }
  id: any = null;
  clientList: any;
  ngOnInit() {
    this.user = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.pattern("^[a-z 0-9A-Z.]{2,30}$")]),
      lastName: new FormControl("", [Validators.required, Validators.pattern("^[a-z 0-9A-Z.]{2,30}$")]),
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9A-Z.@]{2,30}$")]),
      phoneNo: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{10,10}$")]),
      role: new FormControl("", Validators.required),
      assignedClients: this.formBuilder.array([])
    });
    this._route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.editUser(this.id);
      }
    })
    let headers = new HttpHeaders();
    this._commonDataService.getData(apiData.url + apiData.client + "/list", headers).subscribe((res: any) => {
      if (res.status == "ok") {
        this.clientList = res.clientList
        this.updateForm(this.clientList);
      }
    }, error => {
      throw new Error(JSON.stringify(error))
    })
  }
  onSubmit(user) {
    let headers = new HttpHeaders();
    // let temp=this.user.getRawValue();
    // temp.phoneNo=parseInt(temp.phoneNo);
    // this.user.setValue(temp);
    this._commonDataService.postData(user.value, apiData.url + apiData.user, headers).subscribe((res: any) => {
      if (res.status == "ok") {
        this._location.back();
      }
      else {
        //console.log("Failed in Submit User");
      }
    }, error => {
      throw new Error(JSON.stringify(error));
    })
  }
  editUser(id) {
    let headers = new HttpHeaders();
    let temp = this.user.getRawValue();
    this._commonDataService.getData(apiData.url + apiData.user + id, headers).subscribe((res: any) => {
      if (res.status == "ok") {
        temp.firstName = res.user.firstName;
        temp.lastName = res.user.lastName;
        temp.email = res.user.email;
        //this.user.controls.email.disable();
        temp.phoneNo = res.user.phoneNo;
        temp.role = res.user.role;
        this.user.setValue(temp);
      }
      else {
        //console.log("Failed in Submit User");
      }
    }, error => {
      throw new Error(JSON.stringify(error));
    })
  }
  onBuildZone() {
    return new FormGroup({
      id: new FormControl(""),
      name: new FormControl(""),
      currentStatus:new FormControl("false")
    })
  }
  onBuildFacility() {
    return new FormGroup({
      id: new FormControl(""),
      name: new FormControl(""),
      zone: new FormArray([this.onBuildZone()])
    })
  }
  onBuildAssignedClients() {
    return new FormGroup({
      id: new FormControl(""),
      name: new FormControl(""),
      facility: new FormArray([this.onBuildFacility()])
    })
  }
  //start
  onBuildZoneNew(zones) {
    if(zones.length==0){
      return this.onBuildZone();
    }
    for (let i = 0; i < zones.length; i++) {
     console.log("zone:"+i)
      return new FormGroup({
        id: new FormControl(zones[i].id),
        name: new FormControl(zones[i].name),
        currentStatus:new FormControl('false')
      })
    }

  }
  onBuildFacilityNew(facilities) {
    if(facilities.length==0){
      return this.onBuildFacility();
    }
    for (let j = 0; j < facilities.length; j++) {
      console.log("facility:"+j)
      return new FormGroup({
        id: new FormControl(facilities[j].id),
        name: new FormControl(facilities[j].name),
        zone: new FormArray([this.onBuildZoneNew(facilities[j].zone==null?[]:facilities[j].zone)])
      })
    }
  }
  onBuildAssignedClientsNew(clients,index) {
    if(clients.length==0){
      return this.onBuildAssignedClients();
    }
      return new FormGroup({
        id: new FormControl(clients.id),
        name: new FormControl(clients.name),
        facility: new FormArray([this.onBuildFacilityNew(clients.facility==null?[]:clients.facility)])
      })
  }
  //end

  getClients(form) {
    return form.controls.assignedClients.controls;
  }
  getFacilities(form) {
    return form.controls.facility.controls;
  }
  getZones(form) {
    return form.controls.zone.controls;
  }
  updateForm(clientList) {
    for (let i = 0; i < clientList.length; i++) {
      const control = <FormArray>this.user.get('assignedClients');
      control.push(this.onBuildAssignedClientsNew(clientList[i],i));
      //Update Client
    }
       //const control = <FormArray>this.user.get('assignedClients');
      //control.push(this.onBuildAssignedClients());
  }
  ngAfterViewInit() {
    // Apparently click is better chan change? Cuz IE?
    jQuery('input[type="checkbox"]').change(function (e) {

      var checked = jQuery(this).prop("checked"),
        container = jQuery(this).parent(),
        siblings = container.siblings();

      container.find('input[type="checkbox"]').prop({
        indeterminate: false,
        checked: checked
      });

      function checkSiblings(el) {

        var parent = el.parent().parent(),
          all = true;

        el.siblings().each(function () {
          return all = (jQuery(this).children('input[type="checkbox"]').prop("checked") === checked);
        });

        if (all && checked) {

          parent.children('input[type="checkbox"]').prop({
            indeterminate: false,
            checked: checked
          });

          checkSiblings(parent);

        } else if (all && !checked) {

          parent.children('input[type="checkbox"]').prop("checked", checked);
          parent.children('input[type="checkbox"]').prop("indeterminate", (parent.find('input[type="checkbox"]:checked').length > 0));
          checkSiblings(parent);

        } else {

          el.parents("li").children('input[type="checkbox"]').prop({
            indeterminate: true,
            checked: false
          });

        }

      }

      checkSiblings(container);
    });
  }
}
