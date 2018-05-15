import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable, fromEvent, Subject, interval } from 'rxjs';
import { take } from 'rxjs/operators';

import { MarbleDemo } from './marble-demo.model';
import { marbleDemoList } from './marble-demo-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isPlaying: boolean = false;
  marbleDemos: MarbleDemo[] = marbleDemoList;
  plainDemo: MarbleDemo = new MarbleDemo('Plain', '', []);
  activeDemo: MarbleDemo;

  // count to 20, update every 1 second
  marblesSource$: Observable<number> = interval(1000).pipe(take(21));

  ngOnInit(): void {
    this.setActiveDemo(0);
  }

  setActiveDemo(index: number): void {
    this.activeDemo = this.marbleDemos[index];
  }

  play(): void {
    this.isPlaying = true;
    this.plainDemo.start(this.marblesSource$);
    this.activeDemo.start(this.marblesSource$);
    // this.marbleDemos.forEach(demo => demo.start(this.marblesSource$));
  }

  stop(): void {
    this.plainDemo.reset();
    this.activeDemo.reset();
    // this.marbleDemos.forEach(demo => demo.reset());
    this.isPlaying = false;
  }
}
