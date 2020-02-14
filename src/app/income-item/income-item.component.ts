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
  }

  checkWeekly(event: any){
    if(event == 'A'){
      this.income.isWeekly = true;
    }else{
      this.income.isWeekly = false;
    }
    this.updateIncomeEvent.emit(this.income);
  }

  checkBiWeekly(event: any){
    if(event == 'A'){
      this.income.isBiWeekly = true;
    }else{
      this.income.isBiWeekly = false;
    }
    this.updateIncomeEvent.emit(this.income);
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