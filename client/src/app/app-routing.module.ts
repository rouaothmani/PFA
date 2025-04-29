import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NoteComponent } from './note/note.component';
import { DemandeComponent } from './demande/demande.component';

const routes: Routes = [
  {
    path:'',
   loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)

 },

  {
    path:'core',
   loadChildren: () => import('../app/core/core.module').then(m => m.CoreModule)

 },
 {
  path:'profile', component: ProfileComponent
 },
 {
  path:'note', component: NoteComponent
 },
 {
  path:'demande', component: DemandeComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
