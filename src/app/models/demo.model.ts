import { Observable, Subscription } from 'rxjs';
import { Pet } from './pet.model';

export class Demo {
  constructor(
    public title: string,
    public description: string,
    public transformations: any[]
  ) {}

  subscription: Subscription;
  result: number[] = [];

  start(source: Observable<Pet>, onComplete?: Function): void {
    console.log('Start: ', this);
    this.subscription = source
      .pipe(...this.transformations)
      .subscribe(
        (num: number) => this.result.push(num),
        // err => {},
        // () => onComplete()
    );
  }

  reset(): void {
    console.log('Reset: ', this);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.result = [];
  }
}
