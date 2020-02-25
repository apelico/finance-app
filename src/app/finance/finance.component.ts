import { Component, OnInit } from '@angular/core';

import { Day } from '../objects/day';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  days : Day[] = [];
  dayCount : number = 90;

  constructor() { }

  ngOnInit() {
    this.createDays();
  }

  createDays(){
    for(var i = 0; i < this.dayCount; i++){
      this.days.push(new Day());
    }
  }

}