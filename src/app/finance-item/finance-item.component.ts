import { Component, OnInit, Input } from '@angular/core';
import { Finance } from '../objects/finance';

@Component({
  selector: 'app-finance-item',
  templateUrl: './finance-item.component.html',
  styleUrls: ['./finance-item.component.css']
})
export class FinanceItemComponent implements OnInit {
  @Input() finance : Finance;

  constructor() { }

  ngOnInit() {
  }

}