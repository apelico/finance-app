import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Income } from '../objects/income';

import { FinancingService } from '../services/financing.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  incomes : Income[] = [];

  constructor(private financing : FinancingService) {}

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    var income : Income = new Income();
    income.incomeName = f.value['incomeName'];
    income.incomeDate = f.value['incomeDate'];
    income.incomeAmount = f.value['incomeAmount'];

    this.financing.createIncome(income);
    this.incomes = this.financing.getIncomes();

  }

  removeIncome(i : number){
    this.financing.removeIncome(i);
    this.incomes = this.financing.getIncomes();
  }

}