import { Component } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  marbles: any[] = [];

  addMarble(): void {
    this.marbles.push(1);
  }
}
