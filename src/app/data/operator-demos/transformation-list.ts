// import { Observable, fromEvent, Subject, interval, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { Demo } from '../../models/demo.model';
import { Pet } from '../../models/pet.model';

/** TRANSFORMATION OPERATOR DEMOS */
// NOTE: this modifies not only the value in the stream, but also the original source. Might want to explain this

export const createTransformationOperatorDemoList = (): Demo[] => {
  return [
    new Demo(
      'map',
      'Append each pet name with an exclamation mark',
      [map((x: Pet) => {
        x.name = `${x.name}!`;
        return x;
      })]
    ),
  ];
};
