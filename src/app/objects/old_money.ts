export class Money {
  index: number;
  id: number;

  name : string = 'Name';
  date : string = '';
  day : number;
  amount : number = 0;
  isClone : boolean = false;

  isWeekly = false;
  isBiWeekly = false;
  isMonthly = false;

  clone(m : Money){
    this.name = m.name;
    this.amount = m.amount;
    this.isClone = true;
  }
}