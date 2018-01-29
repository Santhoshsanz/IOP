import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ClientServiceService } from '../../client-service.service';
import { ActivatedRoute } from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { Location } from '@angular/common';
import { ElementRef, NgZone } from '@angular/core';
import { BackComponent } from '../../shared/back.component';
import { } from '@types/googlemaps';
import { ToasterModule, ToasterService, ToasterConfig, Toast } from 'angular2-toaster';
import { BodyOutputType } from 'angular2-toaster';
import { ToastComponent } from '../../shared/Toast/toast.component';
@Component({
  selector: 'app-add-facility',
  templateUrl: './client-editor.component.html'
})
export class ClientEditorComponent implements OnInit {
  @ViewChild('fileLogo')
  file: any;
  id: any;
  client: FormGroup;
  lat: any;
  lng: any;
  @ViewChild('search') public searchElement: ElementRef;
  config: ToasterConfig;
  constructor(private formBuilder: FormBuilder,
    private clientService: ClientServiceService, private route: ActivatedRoute, private _location: Location,
    private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,
    private toasterService: ToasterService) { }
  ngOnInit() {
    console.log("Add Client Init")
    this.client = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required,Validators.pattern("^[A-Za-z0-9 ]{2,30}$")]),
      logoUrl: new FormControl(""),
      imgType: new FormControl("", [Validators.pattern("^[a-z0-9'./]{2,30}$")]),
      address: this.formBuilder.group({
        street: ["", [Validators.required, Validators.minLength(2),Validators.pattern("^[a-z 0-9A-Z.]{2,30}$")]],
        address1: ["", [Validators.required, Validators.minLength(2)]],
        address2: ["", [Validators.required, Validators.minLength(2),Validators.pattern("^[a-z0-9A-Z '. #-()]{2,30}$")]],
        country: ["", [Validators.required, Validators.minLength(2),Validators.pattern("^[a-z A-Z'.]{2,30}$")]],
        state: ["", [Validators.required, Validators.minLength(2),Validators.pattern("^[a-z A-Z'.]{2,30}$")]],
        city: ["", [Validators.required, Validators.minLength(2),Validators.pattern("^[a-z A-Z'.]{2,30}$")]],
        pinCode: ["", [Validators.required, Validators.minLength(6),Validators.pattern("^[0-9]{2,30}$")]],
        latitude: ["", [Validators.required, Validators.minLength(2),Validators.pattern("^[0-9-.]{2,100}$")]],
        longitude: ["", [Validators.required, Validators.minLength(2),Validators.pattern("^[0-9-.]{2,100}$")]]
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
            let temp = this.client.getRawValue();
            temp.address.latitude = this.lat;
            temp.address.longitude = this.lng;
            temp.address.address1 = place.formatted_address;
            this.client.setValue(temp);
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
      temp = self.client.getRawValue();
      temp.logoUrl = resultSet;
      temp.imgType = type;
      self.client.setValue(temp);
    }
  }
  onSubmit(client) {
    var self = this;
    this.clientService.saveClient(client.value).subscribe((res: any) => {
      self.client.reset();
      this.file.nativeElement.value = "";
      this._location.back();
    })
  }
  editFacility(id) {
    let temp = this.client.getRawValue();
    let currentFacility = this.clientService.getClient(id).subscribe((res: any) => {
      temp.id = res.clientInfo.id;
      temp.name = res.clientInfo.name;
      temp.logoUrl = res.clientInfo.logoUrl;
      temp.address.address1 = res.clientInfo.address.address1
      temp.address.address2 = res.clientInfo.address.address2;
      temp.address.street = res.clientInfo.address.street;
      temp.address.state = res.clientInfo.address.state;
      temp.address.country = res.clientInfo.address.country;
      temp.address.pinCode = res.clientInfo.address.pinCode;
      this.client.setValue(temp);
    });
  }
  popToast() {
    this.config = new ToasterConfig({
      positionClass: 'toast-bottom-right',
      timeout: 50000000
    });
    var toast: Toast = {
      type: 'error',
      title: 'Here is a Toast Title',
      body: '<button class"btn btn-warning">Click Me</button>',
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
      onHideCallback: () => {
        this.customfunction();
      }

    };

    this.toasterService.pop(toast);
  }
  customfunction() {
  }
}