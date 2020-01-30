import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Finance } from '../objects/finance';
import { Bill } from '../objects/bill';
import { Income } from '../objects/income';

import { FinancingService } from '../services/financing.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  incomes: Income[] = [];
  bills: Bill[] = [];

  dailyFinance : Finance[] = [];
  currentCash : number = 300;

  constructor(private financing : FinancingService) {}



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

    var income = new Income();
      income.customIncome();
      this.addIncome(income);
  }

  updateList(){
    this.updateBills();
    
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

      if(this.dailyFinance[i].income.length > 0){
        for(var j = 0; j < this.dailyFinance[i].income.length;j++){
          this.dailyFinance[i].amount += this.dailyFinance[i].income[j].incomeAmount;
        }
      }
    }
  }

  updateBills(){
    this.bills = this.financing.getBills();

    for(var i = 0; i < 30; i++){
      for(var j = 0; j < this.bills.length; j++){
        if(this.dailyFinance[i].date == this.bills[j].billDate){
          this.dailyFinance[i].bill.push(this.bills[j]);
        }
      }
    }

    console.log(this.bills);
  }

  addIncome(income : Income){
    for(var i = 0; i < 30; i++){
      if(this.dailyFinance[i].date == income.incomeDate){
        this.dailyFinance[i].income.push(income);
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
    return d.getUTCFullYear() + '-' + (newMonth) + '-' + newDay;
  }

}