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
  income : Income = new Income();

  constructor(private financing : FinancingService) {}

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    var income = new Income();
    income.incomeName = f.value['billName'];
    income.incomeDate = f.value['billDate'];
    income.incomeAmount = f.value['billAmount'];

    this.incomes.push(income);
  }

}