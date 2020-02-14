import { Bill } from './bill';
import { Income } from './income';

import { Money } from './money';

export class Finance {
  date: string;
  day: number;
  amount: number;
  up: number = 0;
  down: number = 0;
  change: number = 0;


  money : Money[] = [];
  bill : Bill[] = [];
  income : Income[] = [];
}