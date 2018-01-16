import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { ClientServiceService } from '../../client-service.service';
import { RouterModule, Routes, Router } from '@angular/router'

@Component({
  selector: 'app-add-facility',
  templateUrl: './client-view.component.html'
})
export class ClientViewComponent implements OnInit {
  model: any;
  constructor(private _http: HttpClientModule, private clientService: ClientServiceService, private router: Router) { }
  ngOnInit() {
    console.log("Add Client Init")
    this.getAllClients();
  }
  getAllClients() {
    console.log("called")
    this.clientService.getAllClients().subscribe((res: any) => {
      this.model = res.clientsInfo;
      console.log(this.model)
    });
    console.log(this.model);
  }
  deleteClient(id) {
    if (confirm("Are you sure to delete " + name)) {
      this.clientService.deleteClient(id).subscribe((res: any) => {
        this.getAllClients();
      })
      console.log(id);
    }
  }
  addClient() {
    this.router.navigate(['./AddClient/Add']);
  }
  editClient(id) {
    this.router.navigate(['./AddClient/Edit/' + id]);
  }
}