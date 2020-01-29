import { Component, OnInit } from '@angular/core';

import { Finance } from '../objects/finance';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  dailyFinance : Finance[] = [];
  currentCash : number = 300;

  constructor() {
   }

  ngOnInit() {
    for(var i = 0; i < 30; i++){
      var finance = new Finance();
      if(i == 0) {
        finance.amount = this.currentCash;
      }else{
        finance.amount = this.dailyFinance[i-1].amount;
      }
          finance.date = this.getDate(i);
          this.dailyFinance.push(finance);
    }
  }

  getDate(day : number){
    var d = new Date();
    d.setDate(d.getDate() + day);
    var newDay = d.getDate();
    if(newDay <= 9){
      return (d.getUTCMonth() + 1) + '-' + '0' + newDay + '-' + d.getUTCFullYear();
    }
    return (d.getUTCMonth() + 1) + '-' + newDay + '-' + d.getUTCFullYear();
  }

  calculate(){
  }

}