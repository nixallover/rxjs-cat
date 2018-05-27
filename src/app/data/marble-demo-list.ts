import { Observable, fromEvent, Subject, interval, timer } from 'rxjs';
import { take, tap, filter, map, skip, skipUntil, skipWhile, sample, first, takeWhile, throttle, throttleTime } from 'rxjs/operators';

import { MarbleDemo } from '../models/marble-demo.model';

export const marbleDemoList: MarbleDemo[] = [
  new MarbleDemo(
    'filter',
    'Filter out odd numbers',
    [filter((x: number) => x % 2 === 0)]
  ),

  new MarbleDemo(
    'first (no predicate)',
    'First value in sequence',
    [first()]
  ),

  new MarbleDemo(
    'first',
    'First multiple of 5',
    [first((x: number) => x !== 0 && x % 5 === 0)]
  ),

  new MarbleDemo(
    'map',
    'Map number to a string value, prefixed with #',
    [map((x: number) => `#${x}`)]
  ),

  new MarbleDemo(
    'sample',
    'Sample value every 3 seconds',
    [sample(interval(3 * 1000))]
  ),

  new MarbleDemo(
    'skip',
    'Skip 4 numbers, then output as normal',
    [skip(4)]
  ),

  new MarbleDemo(
    'skipUntil',
    'Skip until an observable emits (after 6 seconds)',
    [skipUntil(timer(6 * 1000))]
  ),

  new MarbleDemo(
    'skipWhile',
    'Skip while value is less than 3',
    [skipWhile(x => x < 3)]
  ),

  new MarbleDemo(
    'take',
    'Take only the first 3 values',
    [take(3)]
  ),

  new MarbleDemo(
    'takeWhile',
    'Take while the value is less than 3, then complete',
    [takeWhile(x => x < 3)]
  ),

  new MarbleDemo(
    'throttle',
    'Emit latest value every 4 seconds',
    [throttle(x => interval(4 * 1000))]
  ),

  new MarbleDemo(
    'throttleTime',
    'Emit latest value every 4 seconds',
    [throttleTime(4 * 1000)]
  ),
];
