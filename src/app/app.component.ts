import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, Subject, interval, of, from } from 'rxjs';
import { take, delay, map } from 'rxjs/operators';

import { Demo } from './models/demo.model';
import { demoList } from './data/demo-list';

import { Pet } from './models/pet.model';
import { petList } from './data/pet-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  isPlaying: boolean = false;
  demos: Demo[] = demoList();
  pets: any[] = petList();
  // demoPet: Pet = new Pet('Bailey', 'dog', 13);

  plainDemo: Demo = new Demo('Original', '', []);
  activeDemo: Demo;

  source$: Observable<Pet>;

  createSource(): Observable<Pet> {
    /** emits one pet from the list every second, ends after the last pet */
    return interval(1000).pipe(
      take(this.pets.length),
      map(x => this.pets[x])
    );
  }

  ngOnInit(): void {
    this.setActiveDemo(0);
  }

  setActiveDemo(index: number): void {
    this.reset();
    this.activeDemo = this.demos[index];
  }

  play(): void {
    // FIXME: need to reset demo after the demo has completed
    // const onComplete = () => { setTimeout(this.reset(), 3 * 1000); };
    this.isPlaying = true;
    this.source$ = this.createSource();

    this.plainDemo.start(this.source$);
    this.activeDemo.start(this.source$);
  }

  reset(): void {
    this.plainDemo.reset();
    if (this.activeDemo) {
      this.activeDemo.reset();
    }
    this.isPlaying = false;
  }
}
