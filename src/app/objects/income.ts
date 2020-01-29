export class Income {
  
  incomeName : string = '';
  incomeDate : string = '';
  incomeAmount : number = 0;
  incomeFrequency : Frequency = Frequency.weekly;

  public customIncome(){
    this.incomeName = 'austin';
    this.incomeDate = '02-22-2019';
    this.incomeAmount = 750;
  }

}

enum Frequency {
  "weekly",
  "biWeekly"
}