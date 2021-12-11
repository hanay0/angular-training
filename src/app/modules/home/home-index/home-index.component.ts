import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit {
changeColor: boolean= false;
  constructor() {
   }

  ngOnInit(): void {
    
    console.log(this.changeColor);
  }
  addClass() {
    this.changeColor = !this.changeColor;
    console.log(this.changeColor);
    
  }
}
