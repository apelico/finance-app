import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Bill } from '../objects/bill';

import { FinancingService } from '../services/financing.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bill : Bill = new Bill();

  constructor(private financing : FinancingService) {
  }

  ngOnInit() {

  }

  onSubmit(f: NgForm) {
    this.bill.billName = f.value['billName'];
    this.bill.billDate = f.value['billDate'];
    this.bill.billAmount = f.value['billAmount'];

    this.financing.createBill(this.bill);
  }

}