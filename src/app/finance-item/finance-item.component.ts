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
  @Output() update : Finance = new EventEmitter<Finance>();

  constructor() { }

  ngOnInit() {
  }

  removeFinance(){
    this.remove.emit(this.index);
  }

  updateName(text : string)
  {
    this.finance.name = text;
    this.update.emit(this.finance);
  }

  updateDate(text : Date)
  {
    var d : Date = new Date(text);
    this.finance.day[0] = (d.getDate() + 1);
    this.finance.date = text;
    this.update.emit(this.finance);
  }


  updateAmount(text : number)
  {
    this.finance.amount = text;
    this.update.emit(this.finance);
  }

  checkMonthly(event: any){
   if(event == 'A'){
     this.finance.isMonthly = true;
   }else{
     this.finance.isMonthly = false;
   }
   this.update.emit(this.finance);
  }

  checkWeekly(event: any){
   if(event == 'A'){
     this.finance.isWeekly = true;
      for(var i = 1; i < 10; i++){
       this.finance.day[i] = (this.finance.day + 7);
       console.log(this.finance.day);
     }
   }else{
     this.finance.isWeekly = false;
   }
   this.update.emit(this.finance);
  }

  checkBiWeekly(event: any){
   if(event == 'A'){
     this.finance.isBiWeekly = true;
   }else{
     this.finance.isBiWeekly = false;
   }
   this.update.emit(this.finance);
  }


}