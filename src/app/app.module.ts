import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FinanceComponent } from './finance/finance.component';
import { BillItemComponent } from './bill-item/bill-item.component';
import { IncomeItemComponent } from './income-item/income-item.component';
import { DayItemComponent } from './day-item/day-item.component';
import { FinanceItemComponent } from './finance-item/finance-item.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, FinanceComponent, BillItemComponent, IncomeItemComponent, DayItemComponent, FinanceItemComponent],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
