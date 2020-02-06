import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FinanceComponent } from './finance/finance.component';
import { BillComponent } from './bill/bill.component';
import { IncomeComponent } from './income/income.component';
import { BillItemComponent } from './bill-item/bill-item.component';
import { IncomeItemComponent } from './income-item/income-item.component';
import { DayItemComponent } from './day-item/day-item.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, FinanceComponent, BillComponent, IncomeComponent, BillItemComponent, IncomeItemComponent, DayItemComponent],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
