import { Component, OnInit} from '@angular/core';

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
      var d : Day = new Day();
      d.day = this.getDay(i);
      this.days.push(d);
    }
  }

  createIncome(){
    var i = new Finance();
    i.isIncome = true;
    this.finance.push(i);
  }

  createBill(){
    var i : Finance = new Finance();
    i.isBill = true;
    this.finance.push(i);
  }

  removeFinance(index : number){
    this.finance.splice(index,1);
  }

  
  updateFinance(finance : Finance){
    this.finance[finance.index] = finance;
    console.log(this.finance);
  }

  update(){
    for(var i = 0; i < this.dayCount;i++){
      for(var x = 0; x < this.finance.length;x++){
        if(this.finance[x].day == this.days[i].day){
          
        }
      }
    }
  }

  getDay(day : number){
    var d = new Date();
    d.setDate(d.getDate() + day);
    var newDay = d.getDate().toString().padStart(2,0);
    return newDay;
  }

}