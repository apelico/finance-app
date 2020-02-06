import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Finance } from '../objects/finance';

import {NgForm} from '@angular/forms';
import { Bill } from '../objects/bill';
import { Income } from '../objects/income';

@Component({
  selector: 'app-day-item',
  templateUrl: './day-item.component.html',
  styleUrls: ['./day-item.component.css']
})
export class DayItemComponent implements OnInit {
  @Input() finance : Finance;
  @Output() update : Finance = new EventEmitter<Bill>();

  constructor() {
  }

  ngOnInit() {
  }

  addBill() {
    var bill : Bill = new Bill();
    bill.billDate=this.finance.date;
    this.finance.bill.push(bill);
  }

  addIncome(){
    var income : Income = new Income();
    income.incomeDate = this.finance.date;
    this.finance.income.push(income);
  }

  updateIncome(income : Income){
    this.finance.income[income.id] = income;
    this.update.emit(this.finance);
  }

  updateBill(bill : Bill){
    this.finance.bill[bill.id] = bill;
    this.update.emit(this.finance);
  }

  removeBill(i : number){
    this.finance.bill.splice(i, 1);
    this.update.emit(this.finance);
  }

  removeIncome(i : number){
    this.finance.income.splice(i, 1);
    this.update.emit(this.finance);
  }

}