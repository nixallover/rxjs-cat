import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable, fromEvent, Subject, interval, of, from } from 'rxjs';
import { take, delay, map } from 'rxjs/operators';

import { MarbleDemo } from './models/marble-demo.model';
import { marbleDemoList } from './data/marble-demo-list';
import { petList } from './data/pet-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isPlaying: boolean = false;
  marbleDemos: MarbleDemo[] = marbleDemoList;
  pets: any[] = petList;

  plainDemo: MarbleDemo = new MarbleDemo('Original stream', '', []);
  activeDemo: MarbleDemo;

  marbleSource$: Observable<any>;

  createMarbleSource(): void {

    this.marbleSource$ = interval(1000).pipe(
      take(this.pets.length),
      map(x => this.pets[x])
    );
  }



  ngOnInit(): void {
    this.setActiveDemo(0);
  }

  setActiveDemo(index: number): void {
    this.activeDemo = this.marbleDemos[index];
  }

  play(): void {
    this.isPlaying = true;
    this.createMarbleSource();
    this.plainDemo.start(this.marbleSource$);
    this.activeDemo.start(this.marbleSource$);
  }

  stop(): void {
    this.plainDemo.reset();
    this.activeDemo.reset();
    this.marbleSource$ = undefined;
    this.isPlaying = false;
  }
}
