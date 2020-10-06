import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Thomas Jefferson - Push yourself!', 'If you want something you’ve never had, you must be willing to do something you’ve never done'),
    new Quote(2, 'Muhammad Ali - Dont count days!', 'Nothing will work unless you do'),
    new Quote(3, 'Maya Angelou - Do!', 'Don’t count the days, make the days count'),
    new Quote(4, 'Mahatma Gandhi - Strength!', 'Strength does not come from physical capacity. It comes from an indomitable will'),
  ];

toggleDetails(index) {
  this.quotes[index].showDescriptiption = !this.quotes[index].showDescriptiption;
}

completeQuote(isComplete, index){
  if (isComplete){
    this.quotes.splice(index,1);
  }
}
  constructor() { }

  ngOnInit() {
  }

}

