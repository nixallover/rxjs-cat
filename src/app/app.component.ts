import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, Subject, interval } from 'rxjs';
import { take, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  marblesNormal: number[] = [];
  marbles: number[] = [];

  // count to 20, update every 1 second
  marblesSource$: Observable<number> = interval(1000).pipe(take(21));

  ngOnInit(): void {
    this.marblesSource$.forEach(num => this.marblesNormal.push(num));

    this.marblesSource$
      .pipe(
        filter(x => x % 2 === 0)
      )
      .forEach(num => this.marbles.push(num));
  }
}
