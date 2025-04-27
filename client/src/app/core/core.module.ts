import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ProposComponent } from './propos/propos.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { FormationComponent } from './formation/formation.component';
import { ActivitesComponent } from './activites/activites.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ConseilComponent } from './conseil/conseil.component';
import { DepComponent } from './dep/dep.component';
import { TicComponent } from './tic/tic.component';
import { SiComponent } from './si/si.component';
import { ClubComponent } from './club/club.component';
import { InscComponent } from './insc/insc.component';
import { MdpComponent } from './mdp/mdp.component';
import { For1Component } from './for1/for1.component';
import { For2Component } from './for2/for2.component';
import { For3Component } from './for3/for3.component';
import { For4Component } from './for4/for4.component';
import { MpiiComponent } from './mpii/mpii.component';
import { MpilcComponent } from './mpilc/mpilc.component';
import { MreescComponent } from './mreesc/mreesc.component';
import { Insc2Component } from './insc2/insc2.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProposComponent,
    ActualitesComponent,
    FormationComponent,
    ActivitesComponent,
    ContactComponent,
    ConseilComponent,
    DepComponent,
    TicComponent,
    SiComponent,
    ClubComponent,
    InscComponent,
    MdpComponent,
    For1Component,
    For2Component,
    For3Component,
    For4Component,
    MpiiComponent,
    MpilcComponent,
    MreescComponent,
    Insc2Component
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports:[
    ProposComponent,
    ActualitesComponent,
    ActivitesComponent,
    FormationComponent,
    ContactComponent,
    ConseilComponent,
    DepComponent,
    TicComponent,
    SiComponent,
    ClubComponent,
    InscComponent,
    MdpComponent,
    For1Component,
    For2Component,
    For3Component,
    For4Component,
    MpiiComponent,
    MpilcComponent,
    MreescComponent,
    Insc2Component
  ]
})
export class CoreModule { }
