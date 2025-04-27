import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
   loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)

 },

  {
    path:'core',
   loadChildren: () => import('../app/core/core.module').then(m => m.CoreModule)

 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
