export class Income {
  
  incomeName : string = null;
  incomeDate : string = '';
  incomeAmount : number = 0;
  isWeekly = false;
  isBiWeekly = false;

  public customIncome(){
    this.incomeName = 'austin';
    this.incomeDate = '02-22-2020';
    this.incomeAmount = 750;
  }

}