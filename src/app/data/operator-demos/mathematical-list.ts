// import { Observable, fromEvent, Subject, interval, timer } from 'rxjs';
import { count } from 'rxjs/operators';

import { Demo } from '../../models/demo.model';
import { Pet } from '../../models/pet.model';

export const createMathematicalOperatorDemoList = (): Demo[] => {
  return [
    new Demo(
      'count',
      'Count all the values emitted (no predicate)',
      [count()]
    ),

    new Demo(
      'count',
      'Count all the cats',
      [count((x: Pet) => x.type === 'bird')]
    ),
  ];
};
