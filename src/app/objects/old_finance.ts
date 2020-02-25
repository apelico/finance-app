import { Money } from './money';

export class Finance {
  date: string;
  day: number;
  amount: number;
  up: number = 0;
  down: number = 0;
  change: number = 0;
  reoccuring: number = 0;


  money : Money[] = [];
}