import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Finance } from '../objects/finance';

import {NgForm} from '@angular/forms';
import { Bill } from '../objects/bill';
import { Income } from '../objects/income';
import { Money } from '../objects/money';

@Component({
  selector: 'app-day-item',
  templateUrl: './day-item.component.html',
  styleUrls: ['./day-item.component.css']
})
export class DayItemComponent implements OnInit {
  @Input() finance : Finance;
  @Output() update : Finance = new EventEmitter<Bill>();

  constructor() {
  }

  ngOnInit() {
  }

  addFinance() {
    var money : Money = new Money();
    money.date = this.finance.date;
    money.day = this.finance.day;
    this.finance.money.push(money);
  }

  updateFinance(money : Money){
    this.finance.money[money.id] = money;
    this.update.emit(this.finance);
  }

  removeFinance(i : number){
    this.finance.money.splice(i, 1);
    this.update.emit(this.finance);
  }

}