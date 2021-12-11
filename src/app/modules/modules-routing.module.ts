import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "cars",
    loadChildren: () =>
    import("./cars/cars.module").then(m => m.CarsModule)
  },
  {
    path: "home",
    loadChildren: () =>
    import("./home/home.module").then(m => m.HomeModule)
  },
  { path:'', redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
