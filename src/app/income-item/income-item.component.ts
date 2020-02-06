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
  @Output() updateIncomeEvent = new EventEmitter<Income>();
  

  constructor() { }

  ngOnInit() {
    this.income.id = this.id;
  }

  removeIncome(){
    this.removeIncomeEvent.emit(this.id);
  }

  updateName(text : string){
    this.income.incomeName=text;
    this.updateIncomeEvent.emit(this.income);
  }

  updateAmount(text : number){
    this.income.incomeAmount=text;
    this.updateIncomeEvent.emit(this.income);
  }



}