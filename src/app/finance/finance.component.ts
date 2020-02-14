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
  dayCount : number = 30;

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
        }
      }
    }

    /*for(var i = 0; i < 30; i++){
      this.dailyFinance[i].down = 0;
      this.dailyFinance[i].up = 0;
      if(i == 0) {
        this.dailyFinance[i].amount = this.currentCash;
      }else{
        this.dailyFinance[i].amount = this.dailyFinance[i-1].amount;
      }

      if(this.dailyFinance[i].bill.length > 0){
        for(var j = 0; j < this.dailyFinance[i].bill.length;j++){
          this.dailyFinance[i].amount -= Number(this.dailyFinance[i].bill[j].billAmount);
          this.dailyFinance[i].down += Number(this.dailyFinance[i].bill[j].billAmount);

          if(this.dailyFinance[i].bill[j].monthly){
            this.monthlyBill(this.dailyFinance[i].bill[j]);
          }
        }
      }

      if(this.dailyFinance[i].income.length > 0){
        for(var j = 0; j < this.dailyFinance[i].income.length;j++){
          this.dailyFinance[i].amount += Number(this.dailyFinance[i].income[j].incomeAmount);
          this.dailyFinance[i].up += Number(this.dailyFinance[i].income[j].incomeAmount);
        }
      }
    }*/
  }

  updateIncome(income : number){
    this.currentCash = Number(income);
    this.updateList();
  }

  monthlyBill(b : Bill){
    for(var i = 0; i < this.dayCount; i++){
      if(this.dailyFinance[i].date != b.billDate){
        if(this.dailyFinance[i].day == b.billDay){
          if(this.dailyFinance[i].bill.length == 0){
            this.monthlyBill(this.dailyFinance[i].bill.push(b));
          }else{
            var has = false;
            for(var j = 0; j < this.dailyFinance[i].bill.length;j++){
              if(this.dailyFinance[i].bill[j].billName == b.billName){
                has = true;
                break;
              }
            }
            if(has == false){
              this.monthlyBill(this.dailyFinance[i].bill.push(b));
            }
          }
        }
      }
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