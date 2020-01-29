import { Component, OnInit } from '@angular/core';

import { Finance } from '../objects/finance';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

    dailyFinance : Finance[] = [];

  constructor() {
    var d = new Finance();
    d.date = '02-02-2020';
    d.amount = 300;
    this.dailyFinance.push(d);
   }

  ngOnInit() {
  }

}