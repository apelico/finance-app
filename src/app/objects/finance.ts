import { Bill } from './bill';
import { Income } from './income';

export class Finance {
  date: string;
  day: number;
  amount: number;
  up: number = 0;
  down: number = 0;

  bill : Bill[] = [];
  income : Income[] = [];
}