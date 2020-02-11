export class Bill {
  index: number;
  id: number;
  billName : string = null;
  billDate : string = '';
  billAmount : number = 0;
  monthly : boolean = false;

  public customBill(){
    this.billName = 'car';
    this.billDate = '2020-02-15';
    this.billAmount = 350;
  }

  public createBill(name : string, date : string, amount : number){
    this.billName = name;
    this.billDate = date;
    this.billAmount = amount;
  }
}