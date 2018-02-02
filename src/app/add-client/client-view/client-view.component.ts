import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { CommonDataService } from '../../common-data.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { apiData } from '../../common'

@Component({
  selector: 'app-add-facility',
  templateUrl: './client-view.component.html'
})
export class ClientViewComponent implements OnInit {
  model: any;
  constructor(private _http: HttpClientModule, private _commonDataService: CommonDataService, private router: Router) { }
  ngOnInit() {
    //console.log("Add Client Init")
    this.getAllClients();
  }
  getAllClients() {
    let headers = new HttpHeaders();
    //console.log("called")
    this._commonDataService.getData(apiData.url + apiData.client, headers).subscribe((res: any) => {
      if (res.status == "ok") {
        this.model = res.clientsInfo;
      }
    });
  }
  deleteClient(id) {
    if (confirm("Are you sure to delete " + name)) {
      this._commonDataService.deleteData(apiData.url, id).subscribe((res: any) => {
        if (res.status == "ok") {
          this.getAllClients();
        }
      })
      //console.log(id);
    }
  }
  addClient() {
    this.router.navigate(['./AddClient/Add']);
  }
  editClient(id) {
    this.router.navigate(['./AddClient/Edit/' + id]);
  }
}