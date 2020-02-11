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

  Schedule: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
  

  constructor() { }

  ngOnInit() {
    this.bill.id = this.id;
  }

  removeBill(){
    this.removeBillEvent.emit(this.id);
  }

  checkValue(event: any){
   if(event == 'A'){
     this.bill.monthly = true;
   }else{
     this.bill.monthly = false;
   }
   this.updateBillEvent.emit(this.bill);
}

  updateName(text : string){
    this.bill.billName=text;
    this.updateBillEvent.emit(this.bill);
  }

  updateAmount(text : number){
    this.bill.billAmount=text;
    this.updateBillEvent.emit(this.bill);
  }



}