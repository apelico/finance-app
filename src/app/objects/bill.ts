export class Bill {
  billName : string = '';
  billDate : string = '';
  billAmount : number = 0;


  public customBill(){
    this.billName = 'car';
    this.billDate = '02-22-2019';
    this.billAmount = 350;
  }
}