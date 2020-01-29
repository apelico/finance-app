export class Bill {
  billName : string;
  billDate : string;
  billAmount : number;


  public customBill(){
    this.billName = 'car';
    this.billDate = '02-22-2019';
    this.billAmount = 350;
  }


  public Bill(){
    this.billName = '';
    this.billDate = '';
    this.billAmount = 0;
  }
}