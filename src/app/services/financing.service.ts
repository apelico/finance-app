import { Injectable } from '@angular/core';


import { Bill } from '../objects/bill';
import { Income } from '../objects/income';

@Injectable()
export class FinancingService {
  public bills : Bill[] = [];
  public incomes : Income[] = [];

  constructor() { }

  createBill(bill : Bill){
    bill.index = this.bills.length;
    this.bills.push(bill);
  }

  updateBill(bill : Bill){
    this.bills[bill.index] = bill;
  }

  removeBill(i : number){
    this.bills.splice(i, 1);
  }

  getBills(){
    return this.bills;
  }

  createIncome(income : Income){
    this.incomes.push(income);
  }

  removeIncome(i : number){
    this.incomes.splice(i, 1);
  }

  getIncomes(){
    return this.incomes;
  }

}