import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Bill } from '../objects/bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  bills : Bill[] = [
  ];

  constructor() {
    var bill = new Bill();
    bill.createBill('car','02-27-2020',350);
    this.bills.push(bill);

    var bill2 = new Bill();
    bill2.createBill('car2','02-23-2020',500);
    this.bills.push(bill2);
   }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    var bill = new Bill();
    bill.billName = f.value['billName'];
    bill.billDate = f.value['billDate'];
    bill.billAmount = f.value['billAmount'];

    this.bills.push(bill);
  }

}