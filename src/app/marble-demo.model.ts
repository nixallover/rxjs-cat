import { Observable, Subscription } from 'rxjs';

export class MarbleDemo {
  constructor(
    public title: string,
    public description: string,
    public transformations: any[]
  ) {}

  subscription: Subscription;
  result: number[] = [];

  start(source: Observable<number>): void {
    console.log('Start: ', this);
    this.subscription = source
      .pipe(...this.transformations)
      .subscribe((num: number) => this.result.push(num));
  }

  reset(): void {
    console.log('Reset: ', this);
    this.subscription.unsubscribe();
    this.result = [];
  }
}
