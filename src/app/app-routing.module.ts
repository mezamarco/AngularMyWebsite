import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




//Note that this will be the initial path
//A route object must contain a path and a component
//pathMatch property: We need to have matching URLs


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
