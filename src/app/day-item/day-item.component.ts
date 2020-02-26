import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../objects/day';

@Component({
  selector: 'app-day-item',
  templateUrl: './day-item.component.html',
  styleUrls: ['./day-item.component.css']
})
export class DayItemComponent implements OnInit {
  @Input() day : Day;

  constructor() { }

  ngOnInit() {
    
  }

}