import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private financing : FinancingService) {
   }

  ngOnInit() {
  }

  onSubmit() {
    var bill : Bill = new Bill();
    bill.billDate=this.finance.date;
    this.financing.createBill(bill);
    this.finance.bill.push(bill);
  }

  removeBill(i : number){
    this.financing.removeBill(i);
    this.finance.bill.splice(i, 1);
  }

}