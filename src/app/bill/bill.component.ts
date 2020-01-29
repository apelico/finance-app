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
    bill.customBill();
    this.bills.push(bill);
    console.log(this.bills);
   }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    var bill = new Bill();
    bill.billName = f.value['billName'];
    bill.billDate = f.value['billDate'];
    bill.billAmount = f.value['billAmount'];

    this.bills.push(bill);

    console.log(this.bills);
  }

}