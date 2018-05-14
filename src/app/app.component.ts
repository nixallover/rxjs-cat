import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, Subject, interval, OperatorFunction } from 'rxjs';
import { take, tap, filter, map } from 'rxjs/operators';
import { MarbleDemo } from './marble-demo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isPlaying: boolean = false;

  marbleDemos: MarbleDemo[] = [
    new MarbleDemo('Plain', []),
    new MarbleDemo('Filter: Odd', [filter((x: number) => x % 2 === 0)]),
    new MarbleDemo('Map: Double', [map((x: number) => x * 2)]),
  ];

  // count to 20, update every 1 second
  marblesSource$: Observable<number> = interval(1000).pipe(take(21));

  ngOnInit(): void {}

  play(): void {
    this.isPlaying = true;
    this.marbleDemos.forEach(demo => demo.start(this.marblesSource$));
  }

  stop(): void {
    this.marbleDemos.forEach(demo => demo.reset());
    this.isPlaying = false;
  }
}
