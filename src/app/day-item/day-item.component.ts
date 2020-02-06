import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Finance } from '../objects/finance';

import {NgForm} from '@angular/forms';
import { Bill } from '../objects/bill';

import { FinancingService } from '../services/financing.service';

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

  onSubmit() {
    var bill : Bill = new Bill();
    bill.billDate=this.finance.date;
    this.finance.bill.push(bill);
  }

  updateBill(bill : Bill){
    this.finance.bill[bill.id] = bill;
    this.update.emit(this.finance);
  }

  removeBill(i : number){
    this.finance.bill.splice(i, 1);
    this.update.emit(this.finance);
  }

}