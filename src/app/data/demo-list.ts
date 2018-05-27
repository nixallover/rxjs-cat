import { Observable, fromEvent, Subject, interval, timer } from 'rxjs';
import { take, tap, filter, map, skip, skipUntil, skipWhile, sample, first, takeWhile, throttle, throttleTime } from 'rxjs/operators';

import { Demo } from '../models/demo.model';
import { Pet } from '../models/pet.model';

export const demoList = (): Demo[] => {
  return [
    new Demo(
      'filter',
      'Filter out dogs',
      [filter((x: Pet) => x.type !== 'dog')]
    ),

    new Demo(
      'first (no predicate)',
      'First value in sequence',
      [first()]
    ),

    new Demo(
      'first',
      'First multiple of 5',
      [first((x: number) => x !== 0 && x % 5 === 0)]
    ),

    new Demo(
      'map',
      'Map number to a string value, prefixed with #',
      [map((x: number) => `#${x}`)]
    ),

    new Demo(
      'sample',
      'Sample value every 3 seconds',
      [sample(interval(3 * 1000))]
    ),

    new Demo(
      'skip',
      'Skip 4 numbers, then output as normal',
      [skip(4)]
    ),

    new Demo(
      'skipUntil',
      'Skip until an observable emits (after 6 seconds)',
      [skipUntil(timer(6 * 1000))]
    ),

    new Demo(
      'skipWhile',
      'Skip while value is less than 3',
      [skipWhile(x => x < 3)]
    ),

    new Demo(
      'take',
      'Take only the first 3 values',
      [take(3)]
    ),

    new Demo(
      'takeWhile',
      'Take while the value is less than 3, then complete',
      [takeWhile(x => x < 3)]
    ),

    new Demo(
      'throttle',
      'Emit latest value every 4 seconds',
      [throttle(x => interval(4 * 1000))]
    ),

    new Demo(
      'throttleTime',
      'Emit latest value every 4 seconds',
      [throttleTime(4 * 1000)]
    ),
  ];
};
