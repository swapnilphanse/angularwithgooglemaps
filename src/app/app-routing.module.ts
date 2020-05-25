import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path:'map',
    component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
