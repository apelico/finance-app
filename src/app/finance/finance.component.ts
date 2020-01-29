import { Component, OnInit } from '@angular/core';

import { Finance } from '../objects/finance';
import { Bill } from '../objects/bill';

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

    var bill = new Bill();
      bill.createBill('car','2-07-2020',350);
      this.addBill(bill);
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
          this.dailyFinance[i].amount -= this.dailyFinance[i].bill[j].billAmount;
        }
      }
    }
  }

  addBill(bill : Bill){
    for(var i = 0; i < 30; i++){
      if(this.dailyFinance[i].date == bill.billDate){
        this.dailyFinance[i].bill.push(bill);
        break;
      }
    }
    this.updateList();
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