export class Income {
  
  incomeName : string = null;
  incomeDate : string = '';
  incomeAmount : number = 0;
  incomeFrequency : Frequency = Frequency.weekly;

  public customIncome(){
    this.incomeName = 'austin';
    this.incomeDate = '02-22-2020';
    this.incomeAmount = 750;
  }

}

enum Frequency {
  "weekly",
  "biWeekly"
}