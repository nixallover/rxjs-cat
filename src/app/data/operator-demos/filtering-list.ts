import { Observable, fromEvent, Subject, interval, timer } from 'rxjs';
import {
  take, tap, filter, skip, skipUntil, skipWhile, sample, first, takeWhile, throttle, throttleTime
} from 'rxjs/operators';

import { Demo } from '../../models/demo.model';
import { Pet } from '../../models/pet.model';

/** FILTERING OPERATOR DEMOS */

export const createFilteringOperatorDemoList = (): Demo[] => {
  return [
    new Demo(
      'filter',
      'Filter out dogs',
      [filter((x: Pet) => x.type !== 'dog')]
    ),

    new Demo(
      'filter',
      'Filter out everything but dogs',
      [filter((x: Pet) => x.type === 'dog')]
    ),

    new Demo(
      'first',
      'First value in sequence (no predicate)',
      [first()]
    ),

    new Demo(
      'first',
      'First pet with friendliness 5 or less',
      [first((x: Pet) => x.friendliness < 5)]
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
      'Skip while pet friendliness is less than 4',
      [skipWhile((x: Pet) => x.friendliness > 4)]
    ),

    new Demo(
      'take',
      'Take only the first 3 pets',
      [take(3)]
    ),

    new Demo(
      'takeWhile',
      'Take while the value is greater than 5, then complete',
      [takeWhile((x: Pet) => x.friendliness < 5)]
    ),

    new Demo(
      'throttle',
      'Emit latest value every 4 seconds',
      [throttle((x: Pet) => interval(3 * 1000))]
    ),

    new Demo(
      'throttleTime',
      'Emit latest value every 4 seconds',
      [throttleTime(4 * 1000)]
    ),
  ];
};
