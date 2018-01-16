import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FacilityService } from '../../facility.service';
import { ActivatedRoute } from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { Location } from '@angular/common';
import { ElementRef, NgZone } from '@angular/core';
import { BackComponent } from '../../shared/back.component';
import { ClientServiceService } from '../../client-service.service'
import { } from '@types/googlemaps';
@Component({
  selector: 'app-add-facility',
  templateUrl: './facility-editor.component.html'
})
export class FacilityEditorComponent implements OnInit {
  @ViewChild('fileLogo')
  file: any;
  id: any;
  facility: FormGroup;
  lat: any;
  lng: any;
  clients: any;
  selectedVal:any;
  @ViewChild('search') public searchElement: ElementRef;
  constructor(private formBuilder: FormBuilder,
    private facilityService: FacilityService, private route: ActivatedRoute, private _location: Location,
    private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private clientService: ClientServiceService) { }
  ngOnInit() {
    console.log("Add Client Init")
    this.facility = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      image: new FormControl(),
      imgType: new FormControl(),
      geoX: new FormControl(),
      geoY: new FormControl(),
      address: this.formBuilder.group({
        street: "",
        address1: "",
        address2: "",
        country: "",
        state: "",
        city: "",
        pinCode: "",
        latitude: "",
        longitude: ""
      }),
      client:this.formBuilder.group({
        id:"",
        name:""
      })
    })
    //Location API
    this.mapsAPILoader.load().then(
      () => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ["address"] });
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            let temp = this.facility.getRawValue();
            temp.address.latitude = this.lat;
            temp.address.longitude = this.lng;
            temp.address.address1 = place.formatted_address;
            this.facility.setValue(temp);
            //const position = new google.maps.LatLng(this.lat, this.lng);
            //this.map.panTo(position);
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
          });
        });
      }
    );
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.editFacility(this.id);
      }
    })
    this.getAllClients();
  }
  getFiles(event) {
    var self = this;
    let temp: any;
    let type = event.target.files[0].type;
    debugger;
    var file: File = event.target.files[0];
    var myReader: FileReader = new FileReader();
    myReader.readAsDataURL(file);
    var resultSet = "";
    myReader.onloadend = function (e) {
      var columns = myReader.result.split(/\r\n|\r|\n/g);
      for (var i = 0; i < columns.length; i++) {
        resultSet = resultSet.concat(columns[i].split(' '));
      }
      temp = self.facility.getRawValue();
      temp.image = resultSet;
      temp.imgType = type;
      self.facility.setValue(temp);
    }
  }
  onSubmit(facility) {
    var self = this;
    this.facilityService.saveFacility(facility.value).subscribe((res: any) => {
      self.facility.reset();
      this.file.nativeElement.value = "";
      this._location.back();
    })
  }
  editFacility(id) {
    let temp = this.facility.getRawValue();
    let currentFacility = this.facilityService.getFacility(id).subscribe((res: any) => {
      this.selectedVal=res.facilityInfo.client.id;
      temp.id = res.facilityInfo.id;
      temp.name = res.facilityInfo.name;
      temp.image = res.facilityInfo.image;
      temp.client.id=res.facilityInfo.client.id;
      temp.client.name=res.facilityInfo.client.name;
      debugger;
      temp.address.address1 = res.facilityInfo.address.address1
      temp.address.address2 = res.facilityInfo.address.address2;
      temp.address.street = res.facilityInfo.address.street;
      temp.address.state = res.facilityInfo.address.state;
      temp.address.country = res.facilityInfo.address.country;
      temp.address.pinCode = res.facilityInfo.address.pinCode;
      this.facility.setValue(temp);
    });

  }
  getAllClients() {
    this.clientService.getAllClients().subscribe((res: any) => {
      this.clients = res.clientsInfo;
      
      if(!this.id){
      let temp=this.facility.getRawValue();
      temp.client.name=this.clients[0].name;
      temp.client.id=this.clients[0].id;
      this.facility.setValue(temp);
    }
    })
  }
  onClientChange(event){
    let temp=this.facility.getRawValue();
    temp.client.name=event.target.selectedOptions[0].innerText;
    temp.client.id=event.target.value;
    this.facility.setValue(temp);
    this.selectedVal=event.target.value;
  }
}