import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bill } from '../objects/bill';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.css']
})
export class BillItemComponent implements OnInit {
  @Input() bill : Bill;
  @Input() id : number;
  @Output() removeBillEvent = new EventEmitter<number>();
  @Output() updateBillEvent = new EventEmitter<Bill>();
  

  constructor() { }

  ngOnInit() {
    this.bill.id = this.id;
  }

  removeBill(){
    this.removeBillEvent.emit(this.id);
  }

  updateName(text : string){
    this.bill.billName=text;
    this.updateBillEvent.emit(this.bill);
  }



}