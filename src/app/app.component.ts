import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, Subject, interval, of, from } from 'rxjs';
import { take, delay, map } from 'rxjs/operators';

import { Demo } from './models/demo.model';
import { createDemoList } from './data/demo-list';

import { Pet } from './models/pet.model';
import { createPetList } from './data/pet-list';

import { OperatorCategory } from './models/operator-category.model';
import { Operator } from './models/operator.model';
import { createOperatorCategoryList } from './data/operator-category-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  // data
  pets: any[] = createPetList();

  activeDemo: Demo;
  isPlaying: boolean = false;

  plainDemo: Demo = new Demo('original', '', []);

  source$: Observable<Pet>;

  createSource(): Observable<Pet> {
    /** emits one pet from the list every second, ends after the last pet */
    return interval(1000).pipe(
      take(this.pets.length),
      map(x => this.pets[x])
    );
  }

  ngOnInit(): void {}

  play(): void {
    // FIXME: need to reset demo after it has completed
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
