import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

/** @title Form field with error messages */
@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent {
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter your email';
    }
    // if (this.name.hasError('required')) {
    //   return 'You must enter your Name';
    // }
    // if (this.password.hasError('required')) {
    //   return 'You must enter your password';
    // }
    return this.email.hasError('email') ? 'Please enter a valid email' : '';
  }
}