import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Income } from '../objects/income';

@Component({
  selector: 'app-income-item',
  templateUrl: './income-item.component.html',
  styleUrls: ['./income-item.component.css']
})
export class IncomeItemComponent implements OnInit {
  @Input() income : Income;
  @Input() id : number;
  @Output() removeIncomeEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  removeIncome(){
    this.removeIncomeEvent.emit(this.id);
  }

}