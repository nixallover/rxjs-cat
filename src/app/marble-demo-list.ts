import { Observable, fromEvent, Subject, interval } from 'rxjs';
import { take, tap, filter, map, skip, sample, first } from 'rxjs/operators';

import { MarbleDemo } from './marble-demo.model';

export const marbleDemoList: MarbleDemo[] = [
  new MarbleDemo(
    'Filter',
    'Filter odd numbers',
    [filter((x: number) => x % 2 === 0)]
  ),

  new MarbleDemo(
    'Map',
    'Map to a different value',
    [map((x: number) => `#${x}`)]
  ),

  new MarbleDemo(
    'Skip',
    'Skip 4 numbers',
    [skip(4)]
  ),

  new MarbleDemo(
    'Sample',
    'Sample every 3 seconds',
    [sample(interval(3000))]
  ),

  new MarbleDemo(
    'First',
    'First value in sequence',
    [first()]
  ),

  new MarbleDemo(
    'First',
    'First multiple of 5',
    [first((x: number) => x !== 0 && x % 5 === 0)]
  ),

  new MarbleDemo(
    '',
    '',
    []
  ),
];
