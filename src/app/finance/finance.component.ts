import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Finance } from '../objects/finance';
import { Money } from '../objects/money';
import { Income } from '../objects/income';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  dailyFinance : Finance[] = [];
  currentCash : number = 0;
  dayCount : number = 60;

  @Input() dayChange : Finance;

  constructor() {}

  ngOnInit() {
    this.createList();
    this.updateList();
  }

  createList(){
    this.dailyFinance = [];
    for(var i = 0; i < this.dayCount; i++){
      var finance = new Finance();
      if(i == 0) {
        finance.amount = this.currentCash;
      }else{
        finance.amount = +this.dailyFinance[i-1].amount;
      }
          finance.date = this.getDate(i);
          finance.day = this.getDay(i);
          this.dailyFinance.push(finance);
    }
  }

  updateList(){   

    for(var i = 0; i < this.dayCount; i++)
    {
      this.dailyFinance[i].change = 0;

      if(i == 0) {
        this.dailyFinance[i].amount = this.currentCash;
      }else{
        this.dailyFinance[i].amount = this.dailyFinance[i-1].amount;
      }

      if(this.dailyFinance[i].money.length > 0){
        for(var j = 0; j < this.dailyFinance[i].money.length;j++){
          this.dailyFinance[i].amount += Number(this.dailyFinance[i].money[j].amount);
          this.dailyFinance[i].change += Number(this.dailyFinance[i].money[j].amount);

          if(this.dailyFinance[i].money[j].isMonthly){
            this.addMonthly(this.dailyFinance[i].money[j]);
          }
        }
      }
    }
  }

  addMonthly(m : Money){
    for(var i = 0; i < this.dayCount; i++){
      if(this.dailyFinance[i].date != m.date){
        if(this.dailyFinance[i].day == m.day){
          this.dailyFinance[i].money.push(m);
        }
      }
    }
  }

  updateIncome(income : number){
    this.currentCash = Number(income);
    this.updateList();
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


  getDate(day : number){
    var d = new Date();
    d.setDate(d.getDate() + day);
    var newDay = d.getDate().toString().padStart(2,0);
    var newMonth = (d.getMonth() + 1).toString().padStart(2,0);
    return this.getDayName(day) + ' ' + (newMonth) + '-' + newDay;
  }

  getDay(day : number){
    var d = new Date();
    d.setDate(d.getDate() + day);
    var newDay = d.getDate().toString().padStart(2,0);
    return newDay;
  }

  getDayName(day : number){
    var d = new Date();
    d.setDate(d.getDate() + day);
    switch(d.getDay()){
        case 0:
      return 'Sun';
            case 1:
      return 'Mon';
            case 2:
      return 'Tue';
            case 3:
      return 'Wed';
            case 4:
      return 'Thu';
            case 5:
      return 'Fri';
            case 6:
      return 'Sat';
    }
  }

}