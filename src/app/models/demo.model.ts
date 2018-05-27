import { Observable, Subscription } from 'rxjs';

export class Demo {
  constructor(
    public title: string,
    public description: string,
    public transformations: any[]
  ) {}

  subscription: Subscription;
  result: number[] = [];

  start(source: Observable<number>, onComplete?: Function): void {
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
    this.subscription.unsubscribe();
    this.result = [];
  }
}
