import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Money } from '../objects/money';

@Component({
  selector: 'app-finance-item',
  templateUrl: './finance-item.component.html',
  styleUrls: ['./finance-item.component.css']
})
export class FinanceItemComponent implements OnInit {
  @Input() finance : Money;
  @Input() id : number;
  @Output() removeFinanceEvent = new EventEmitter<number>();
  @Output() updateFinanceEvent = new EventEmitter<Money>();

  constructor() { }

  ngOnInit() {
    this.finance.id = this.id;
  }

  removeBill(){
    this.removeFinanceEvent.emit(this.id);
  }

  updateName(text : string){
    this.finance.name=text;
    this.updateFinanceEvent.emit(this.finance);
  }

  updateAmount(text : number){
    this.finance.amount=text;
    this.updateFinanceEvent.emit(this.finance);
  }

}