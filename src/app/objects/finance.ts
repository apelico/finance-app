export class Finance {
  index : number;

  name : string = 'Name';
  date : string = '';
  day : number;
  nextDay : number;
  month : number;
  amount : number = 0;

  isMonthly = false;
  isWeekly = false;
  isBiWeekly = false;

  isIncome = false;
  isBill = false;
}