import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
