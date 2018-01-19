import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { Route } from '@angular/router/src/config';
import { ClientComponent } from './client/client.component';
import { FieldAgentComponent } from './field-agent/field-agent.component';
import { MissionControlComponent } from './mission-control/mission-control.component';
import { SingleFieldAgentComponent } from './single-field-agent/single-field-agent.component';
import { SingleClientComponent } from './single-client/single-client.component';
import { FacilityComponent } from './facility/facility.component';
import { CrawlAlertComponent } from './crawl-alert/crawl-alert.component';
import { FlyAlertComponent } from './fly-alert/fly-alert.component';
import { DataServiceService } from './data-service.service';
import { LatestAlertsComponent } from './latest-alerts/latest-alerts.component';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { AddClientComponent } from './add-client/add-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFacilityComponent } from './add-facility/add-facility.component';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { AddSensorComponent } from './add-sensor/add-sensor.component';
import { AgmCoreModule,MapsAPILoader } from '@agm/core';
import {ClientServiceService} from './client-service.service';
import {FacilityService} from './facility.service';
import { HttpClientModule,HttpClient,HttpRequest,HttpHeaders } from '@angular/common/http';
import{SafeUrlPipe} from './safe-pipe';
import {MapContentComponent} from './add-facility/mapWrapper.component';
import {FacilityEditorComponent} from './add-facility/facility-editor/facility-editor.component';
import {FacilityViewComponent} from './add-facility/facilityView/facility-view.component';
import {ClientEditorComponent} from './add-client/client-editor/client-editor.component';
import {ClientViewComponent} from './add-client/client-view/client-view.component';
import {BackComponent} from './shared/back.component';
import {SubmitComponent} from './shared/submit.component';
import {ZoneViewComponent} from './add-zone/zone-view/zone-view.component';
import {ZoneEditorComponent} from './add-zone/zone-editor/zone-editor.component';
import {CommonDataService} from './common-data.service';
import {ToasterModule, ToasterService, ToasterConfig} from 'angular2-toaster';
import {ToastComponent} from './shared/Toast/toast.component';
import { AddGatewayComponent } from './add-gateway/add-gateway.component';
import {GatewayEditorComponent } from './add-gateway/edit-gateway/gateway-editor.component';
import {GatewayViewComponent} from './add-gateway/view-gateway/gateway-view.component';
import {SensorViewComponent } from './add-sensor/view-sensor/view-sensor.component';
import {SensorEditorComponent} from "./add-sensor/edit-sensor/sensor-editor.component";
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './user-config/add-user/add-user.component';
import { EditUserComponent } from './user-config//edit-user/edit-user.component';
import {UserConfigComponent} from './user-config/user-config.component'
//Material
import {MatSelectModule} from '@angular/material';
import {MatButtonModule} from '@angular/material'
import {MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material';



const appRoutes: Routes = [
  { path: "", component: MissionControlComponent },
  {
    path: 'index',
    component: MissionControlComponent
  },
  {
    path: 'Client',
    component: ClientComponent
  },
  {
    path: 'Client/:id',
    component: SingleClientComponent
  },
  {
    path: 'AddClient',
    component: AddClientComponent,
    children: [
      {
        path: '',
        component:ClientViewComponent 
      },
      {
        path: 'Edit/:id',
        component: ClientEditorComponent
      },
      {
        path: 'Add',
        component: ClientEditorComponent
      }
    ]
  },{
    path: 'AddFacility',
    component: AddFacilityComponent,
    children: [
      {
        path: '',
        component:FacilityViewComponent 
      },
      {
        path: 'Edit/:id',
        component: FacilityEditorComponent
      },
      {
        path: 'Add',
        component: FacilityEditorComponent
      }
    ]
  },{
    path: 'AddZone',
    component: AddZoneComponent,
    children: [
      {
        path: '',
        component:ZoneViewComponent 
      },
      {
        path: 'Edit/:id',
        component: ZoneEditorComponent
      },
      {
        path: 'Add',
        component: ZoneEditorComponent
      }
    ]
  },{
    path: 'AddGateway',
    component: AddGatewayComponent,
    children: [
      {
        path: '',
        component:GatewayViewComponent 
      },
      {
        path: 'Edit/:id',
        component: GatewayEditorComponent
      },
      {
        path: 'Add',
        component: GatewayEditorComponent
      }
    ]
  },{
    path: 'AddSensor',
    component: AddSensorComponent,
    children: [
      {
        path: '',
        component:SensorViewComponent 
      },
      {
        path: 'Edit/:id',
        component: SensorEditorComponent
      },
      {
        path: 'Add',
        component: SensorEditorComponent
      }
    ]
  },
  {
    path: 'AddUser',
    component: UserConfigComponent,
    children: [
      {
        path: '',
        component:AddUserComponent 
      },
      {
        path: 'Edit/:id',
        component: EditUserComponent
      },
      {
        path: 'Add',
        component: EditUserComponent
      }
    ]
  },
  {
    path: 'FieldAgent',
    component: FieldAgentComponent
  },
  {
    path: 'Client/AlertC/:client/:facility/:alert',
    component: CrawlAlertComponent
  },
  {
    path: 'Client/AlertF/:client/:facility/:alert',
    component: FlyAlertComponent
  }
  , {
    path: 'FieldAgent/:id',
    component: SingleFieldAgentComponent
  },
  {
    path: 'Client/:client/:facility',
    component: FacilityComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: "full"
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    FieldAgentComponent,
    MissionControlComponent,
    SingleFieldAgentComponent,
    SingleClientComponent,
    FacilityComponent,
    CrawlAlertComponent,
    FlyAlertComponent,
    LatestAlertsComponent,
    AddClientComponent,
    AddFacilityComponent,
    AddZoneComponent,
    AddSensorComponent,
    SafeUrlPipe,
    MapContentComponent,
    FacilityViewComponent,
    FacilityEditorComponent,
    BackComponent,
    SubmitComponent,
    ClientEditorComponent,
    ClientViewComponent,
    ZoneViewComponent,
    ZoneEditorComponent,
    ToastComponent,
    AddGatewayComponent,
    GatewayEditorComponent,
    GatewayViewComponent,
    AddGatewayComponent,
    SensorViewComponent,
    SensorEditorComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    UserConfigComponent
  ],
  imports: [
    BrowserModule,
    AmChartsModule,
    Ng2HighchartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToasterModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzJqL_gU_zg7TLJoCqOEfF74jrsHxvIGQ',
      libraries: ["places"]
}),
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  providers: [DataServiceService,ClientServiceService,SafeUrlPipe,FacilityService,CommonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
