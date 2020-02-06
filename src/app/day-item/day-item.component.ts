import { Component, OnInit, Input } from '@angular/core';
import { Finance } from '../objects/finance';

@Component({
  selector: 'app-day-item',
  templateUrl: './day-item.component.html',
  styleUrls: ['./day-item.component.css']
})
export class DayItemComponent implements OnInit {
  @Input() finance : Finance;

  constructor() {
   }

  ngOnInit() {
  }

}