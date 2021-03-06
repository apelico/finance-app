import { Component, OnInit } from "@angular/core";

import { Day } from "../objects/day";
import { Finance } from "../objects/finance";

@Component({
  selector: "app-finance",
  templateUrl: "./finance.component.html",
  styleUrls: ["./finance.component.css"]
})
export class FinanceComponent implements OnInit {
  finance: Finance[] = [];
  days: Day[] = [];
  dayCount: number = 90;
  fakeArray = new Array(12);

  constructor() {}

  ngOnInit() {
    this.createDays();
  }

  createDays() {
    for (var i = 0; i < this.dayCount; i++) {
      var d: Day = new Day();
      d.day = this.getDay(i);
      d.month = this.getMonth(i);
      this.days.push(d);
    }
  }

  createIncome() {
    var i = new Finance();
    i.isIncome = true;
    this.finance.push(i);
    this.updateDays();
  }

  createBill() {
    var i: Finance = new Finance();
    i.isBill = true;
    i.isMonthly= true;
    this.finance.push(i);
    this.updateDays();
  }

  removeFinance(index: number) {
    this.finance.splice(index, 1);
    this.updateDays();
  }

  updateFinance(finance: Finance) {
    this.finance[finance.index] = finance;
    this.updateDays();
  }

  updateDays() {
    for (var i = 0; i < this.dayCount; i++) {
      if (i != 0) {
        this.days[i].amount = this.days[i - 1].amount;
      }else{
        this.days[0].amount = 0;
      }
      for (var x = 0; x < this.finance.length; x++) {
        if ((this.finance[x].day == this.days[i].day && this.finance[x].month == this.days[i].month) || this.finance[x].nextDay == this.days[i].day) {

          if(this.finance[x].isWeekly){
            this.finance[x].nextDay = this.getFutureDate(this.days[i].day,7);
          }else if(this.finance[x].isBiWeekly){
            this.finance[x].nextDay = this.getFutureDate(this.days[i].day,14);
          }else if(this.finance[x].isMonthly){
            this.finance[x].nextDay = this.getFutureMonth(this.days[i].day);
          }

          if (this.finance[x].isIncome) {
            this.days[i].amount += Number(this.finance[x].amount);
          }

          if (this.finance[x].isBill) {
            this.days[i].amount -= Number(this.finance[x].amount);
          }
        }
      }
    }
  }

  getFutureMonth(start: number){
    var d = new Date();
    d.setDate(start);
    d.setMonth(d.getMonth() + 1);
    return d.getDate();
  }

  getFutureDate(start : number , count : number){
    var d = new Date();
    d.setDate(start);
    d.setDate(d.getDate() + count);
    return d.getDate();
  }

  getDay(day: number) {
    var d = new Date();
    d.setDate(d.getDate() + day);
    var newDay = d
      .getDate()
      .toString()
      .padStart(2, 0);
    return newDay;
  }

  getMonth(day: number) {
    var d = new Date();
    d.setDate(d.getDate() + day);
    var newMonth = (d.getMonth() + 1).toString().padStart(2, 0);
    return newMonth;
  }
}
