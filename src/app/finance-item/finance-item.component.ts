import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Finance } from '../objects/finance';

@Component({
  selector: 'app-finance-item',
  templateUrl: './finance-item.component.html',
  styleUrls: ['./finance-item.component.css']
})
export class FinanceItemComponent implements OnInit {
  @Input() index : number;
  @Input() finance : Finance;
  @Output() remove : Finance = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removeFinance(){
    this.remove.emit(this.index);
  }

}