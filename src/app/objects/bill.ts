export class Bill {
  index: number;
  billName : string = '';
  billDate : string = '';
  billAmount : number = 0;

  public customBill(){
    this.billName = 'car';
    this.billDate = '02-22-2019';
    this.billAmount = 350;
  }

  public createBill(name : string, date : string, amount : number){
    this.billName = name;
    this.billDate = date;
    this.billAmount = amount;
  }
}