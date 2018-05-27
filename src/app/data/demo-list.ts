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
      'First pet with friendliness 5 or less',
      [first((x: Pet) => x.friendliness < 5)]
    ),

    // NOTE: this modifies not only the value in the stream, but also the original source. Might want to explain this
    new Demo(
      'map',
      'Append each pet name with an exclamation mark',
      [map((x: Pet) => {
        x.name = `${x.name}!`;
        return x;
      })]
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
