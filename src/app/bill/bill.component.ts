import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Bill } from '../objects/bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bills : Bill[] = [];

  constructor() {
  }

  ngOnInit() { }

  onSubmit(f: NgForm) {
    var bill : Bill = new Bill();
    bill.billName = f.value['billName'];
    bill.billDate = f.value['billDate'];
    bill.billAmount = f.value['billAmount'];

    this.financing.createBill(bill);
    this.bills = this.financing.getBills();
  }

  removeBill(i : number){
    this.financing.removeBill(i);
    this.bills = this.financing.getBills();
  }

}