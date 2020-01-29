import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Bill } from '../objects/bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  newBill : Bill;

  constructor() {
    this.newBill = new Bill();
   }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
  }

}