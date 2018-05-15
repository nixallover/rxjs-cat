import { take, tap, filter, map, skip } from 'rxjs/operators';
import { MarbleDemo } from './marble-demo.model';

export const marbleDemoList: MarbleDemo[] = [
  new MarbleDemo(
    'Filter',
    'Filter odd numbers',
    [filter((x: number) => x % 2 === 0)]
  ),

  new MarbleDemo(
    'Map',
    'Map each number to double its value',
    [map((x: number) => x * 2)]
  ),

  new MarbleDemo(
    'Skip',
    'Skip 4 numbers',
    [skip(4)]
  ),
];
