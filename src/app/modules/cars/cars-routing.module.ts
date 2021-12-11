import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsViewComponent } from './cars-view/cars-view.component';

const routes: Routes = [
  {    
    path: "cars-list",
    component : CarsListComponent
  },
  {    
    path: "cars-view",
    component : CarsViewComponent
  },
  { path:'', redirectTo: "cars-list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }

