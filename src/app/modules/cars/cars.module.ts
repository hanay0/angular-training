import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsViewComponent } from './cars-view/cars-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    CarsListComponent,
    CarsViewComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatFormFieldModule,
    // FormsModule,
    ReactiveFormsModule, // it has the material form control     --- [formControl]="email" ---
    MatInputModule, // this is the material input style and has the MatFormFieldControl and it shows the error
    MatIconModule,
    MatButtonModule
  ]
})
export class CarsModule { }
