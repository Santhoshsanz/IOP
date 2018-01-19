import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ClientServiceService } from '../../client-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
client:FormGroup;
disabbleBtn:boolean;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.client = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required,Validators.pattern("^[a-z 0-9A-Z.]{2,30}$")]),
      email:new FormControl("",[Validators.required,Validators.pattern("^[a-z 0-9A-Z.]{2,30}$")]),
      phone:new FormControl("",[Validators.required,Validators.pattern("^[a-z 0-9A-Z.]{2,30}$")]),
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
  }

}
