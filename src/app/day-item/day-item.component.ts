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

  onSubmit(f: NgForm) {
    var bill : Bill = new Bill();
    bill.billName = f.value['billName'];
    bill.billDate = f.value['billDate'];
    bill.billAmount = f.value['billAmount'];

    this.financing.createBill(bill);
  }

  removeBill(i : number){
    this.financing.removeBill(i);
  }

}