import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: string[];

  constructor() {
    this.quotes = ['Thomas Jefferson Push yourself', 'Muhammad Ali Dont count days', 'Maya Angelou Do', 'Mahatma Gandhi Strength']

  }
}