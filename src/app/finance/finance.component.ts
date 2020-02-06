import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Finance } from '../objects/finance';
import { Bill } from '../objects/bill';
import { Income } from '../objects/income';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  dailyFinance : Finance[] = [];
  currentCash : number = 0;

  @Input() dayChange : Finance;

  constructor() {}

  ngOnInit() {
    this.createList();
    this.updateList();
  }

  createList(){
    this.dailyFinance = [];
    for(var i = 0; i < 30; i++){
      var finance = new Finance();
      if(i == 0) {
        finance.amount = this.currentCash;
      }else{
        finance.amount = +this.dailyFinance[i-1].amount;
      }
          finance.date = this.getDate(i);
          this.dailyFinance.push(finance);
    }
  }

  updateDay(day : Finance){
    for(var i = 0; i < this.dailyFinance.length; i++){
      if(this.dailyFinance[i].date == day.date){
        this.dailyFinance[i] = day;
        break;
      }
    }
    this.updateList();
  }

  updateList(){   
    for(var i = 0; i < 30; i++){
      if(i == 0) {
        this.dailyFinance[i].amount = this.currentCash;
      }else{
        this.dailyFinance[i].amount = this.dailyFinance[i-1].amount;
      }

      if(this.dailyFinance[i].bill.length > 0){
        for(var j = 0; j < this.dailyFinance[i].bill.length;j++){
          this.dailyFinance[i].amount -= Number(this.dailyFinance[i].bill[j].billAmount);
        }
      }

      if(this.dailyFinance[i].income.length > 0){
        for(var j = 0; j < this.dailyFinance[i].income.length;j++){
          this.dailyFinance[i].amount += Number(this.dailyFinance[i].income[j].incomeAmount);
        }
      }
    }
  }

  setIncome(income : number){
    this.currentCash = Number(income);
    this.updateList();
  }


  getDate(day : number){
    var d = new Date();
    d.setDate(d.getDate() + day);
    var newDay = d.getDate().toString().padStart(2,0);
    var newMonth = (d.getMonth() + 1).toString().padStart(2,0);
    return d.getUTCFullYear() + '-' + (newMonth) + '-' + newDay;
  }

}