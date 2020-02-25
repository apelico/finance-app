import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FinanceComponent } from './finance/finance.component';
import { DayItemComponent } from './day-item/day-item.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, FinanceComponent, DayItemComponent],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
