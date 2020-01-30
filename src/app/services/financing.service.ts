import { Injectable } from '@angular/core';


import { Bill } from '../objects/bill';
import { Income } from '../objects/income';

@Injectable()
export class FinancingService {
  public bills : Bill[] = [];

  constructor() { }

  createBill(bill : Bill){
    this.bills.push(bill);
  }

  getBills(){
    return this.bills;
  }

}