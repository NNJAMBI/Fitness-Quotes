import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Thomas Jefferson - Push yourself!', 'If you want something you’ve never had, you must be willing to do something you’ve never done', new Date(2020,8,22)),
    new Quote(2, 'Muhammad Ali - Dont count days!', 'Nothing will work unless you do', new Date(2019,4,27)),
    new Quote(3, 'Maya Angelou - Do!', 'Don’t count the days, make the days count', new Date(2030,7,9)),
    new Quote(4, 'Mahatma Gandhi - Strength!', 'Strength does not come from physical capacity. It comes from an indomitable will', new Date(2020,10,11)),
  ];

toggleDetails(index) {
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

completeQuote(isComplete, index){
  if (isComplete){
    this.quotes.splice(index,1);
  }
}
deletequote(isComplete, index){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}

  constructor() { }

  ngOnInit() {
  }

}

