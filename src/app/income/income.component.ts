import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Income } from '../objects/income';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  incomes : Income[] = [
  ];

  constructor() {
    var income = new Income();
    income.customIncome();
    this.incomes.push(income);
    console.log(this.incomes);
   }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    var income = new Income();
    income.incomeName = f.value['billName'];
    income.incomeDate = f.value['billDate'];
    income.incomeAmount = f.value['billAmount'];

    this.incomes.push(income);

    console.log(this.incomes);
  }

}