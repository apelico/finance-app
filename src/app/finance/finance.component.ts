import { Component, OnInit } from '@angular/core';

import { Day } from '../objects/day';
import { Finance } from '../objects/finance';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  finance : Finance[] = [];
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

  createIncome(){
    var i = new Finance();
    i.isIncome = true;
    i.index = this.finance.length;
    this.finance.push(i);
  }

  createBill(){
    var i : Finance = new Finance();
    i.isBill = true;
    i.index = this.finance.length;
    this.finance.push(i);
  }

  removeFinance(index : number){
    this.finance.splice(index,1);
  }

}