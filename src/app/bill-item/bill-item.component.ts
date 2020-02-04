import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bill } from '../objects/bill';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.css']
})
export class BillItemComponent implements OnInit {
  @Input() bill : Bill;
  @Output() removeBillEvent = new EventEmitter<number>();
  

  constructor() { }

  ngOnInit() {}

  removeBill(){
    this.removeBillEvent.emit(this.bill.id);
  }

}