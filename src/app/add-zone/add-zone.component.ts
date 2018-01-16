import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css']
})
export class AddZoneComponent implements OnInit {
  Client: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http: HttpClientModule) { }
showModal:boolean
  ngOnInit() {
    this.showModal=false;
    console.log("Add Client Init")
    this.Client = new FormGroup({
      Name: new FormControl(),
      LogoUrl: new FormControl(),
      ImgType:new FormControl(),
      Address: this.formBuilder.group({
        Street: "",
        Address1: "",
        Address2: "",
        Country: "",
        State: "",
        City: "",
        PinCode: ""
      })
    })
  }
  onSubmit(myModel) {
    console.log(myModel.value);
  }
  open(){
    this.showModal=true;
    console.log(this.showModal)
    
  }
  close(){
    this.showModal=false;
  }
  getFiles(event) {
    var self=this;
    let temp:any;
    let type=event.target.files[0].type;
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
      temp=self.Client.getRawValue();
      temp.LogoUrl=resultSet;
      temp.ImgType=type;
      self.Client.setValue(temp);
    }
  }
}
