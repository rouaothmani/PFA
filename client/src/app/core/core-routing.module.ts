import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualitesComponent } from './actualites/actualites.component';
import { ProposComponent } from './propos/propos.component';
import { FormationComponent } from './formation/formation.component';
import { ActivitesComponent } from './activites/activites.component';
import { ContactComponent } from './contact/contact.component';
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

const routes: Routes = [
  
  {
    path:'actualites',
    component: ActualitesComponent
  },
  {
    path:'propos',
    component:ProposComponent 
  },
  {
    path:'formation',
    component:FormationComponent 
  },
  {
    path:'activites',
    component:ActivitesComponent 
  },
  {
    path:'contact',
    component:ContactComponent 
  },
  {
    path:'conseil',
    component:ConseilComponent 
  },
  {
    path:'dep',
    component:DepComponent 
  },
  {
    path:'tic',
    component:TicComponent 
  },
  {
    path:'si',
    component:SiComponent 
  },
  {
    path:'club',
    component:ClubComponent 
  },
  {
    path:'insc',
    component:InscComponent 
  },
  {
    path:'mdp',
    component:MdpComponent 
  },
  {
    path:'for1',
    component:For1Component 
  },{
    path:'for2',
    component:For2Component 
  },{
    path:'for3',
    component:For3Component 
  },{
    path:'for4',
    component:For4Component 
  },
  
  {
    path:'mpii',
    component:MpiiComponent 
  }, {
    path:'mpilc',
    component:MpilcComponent 
  }, {
    path:'mreesc',
    component:MreescComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
