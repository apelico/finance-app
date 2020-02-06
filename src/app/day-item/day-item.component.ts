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

  updateBill(bill : Bill){
    this.finance.bill[bill.index] = bill;
    this.financing.updateBill(bill);
  }

  removeBill(i : number){
    console.log(i);
    this.financing.removeBill(this.finance.bill[i].index);
    this.finance.bill.splice(i, 1);
  }

}