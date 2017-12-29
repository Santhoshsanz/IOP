import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

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
import {DataServiceService} from './data-service.service';
const appRoutes:Routes=[
  { path:"",component:MissionControlComponent},
    {
    path:'index',
    component:MissionControlComponent},
    {
    path:'Client',
    component:ClientComponent},
    {
      path:'Client/:id',
      component:SingleClientComponent},
    {
      path:'FieldAgent',
      component:FieldAgentComponent},
      {
        path:'Client/AlertC/:client/:facility/:alert',
        component:CrawlAlertComponent},
        {
          path:'Client/AlertF/:client/:facility/:alert',
          component:FlyAlertComponent}
      ,{
        path:'FieldAgent/:id',
        component:SingleFieldAgentComponent},
        {
          path:'Client/:client/:facility',
          component:FacilityComponent},
          {
            path:'**',redirectTo:'',pathMatch:"full"
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
    FlyAlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:false}),
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
