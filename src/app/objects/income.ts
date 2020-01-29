export class Income {
  
  incomeName : string = '';
  incomeDate : string = '';
  incomeAmount : number = 0;
  incomeFrequency : Frequency = Frequency.weekly;

}

enum Frequency {
  "weekly",
  "biWeekly"
}