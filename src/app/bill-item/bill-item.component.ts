import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../objects/bill';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.css']
})
export class BillItemComponent implements OnInit {
  @Input() id : Number;
  @Input() bill : Bill;

  constructor() { }

  ngOnInit() {}

}