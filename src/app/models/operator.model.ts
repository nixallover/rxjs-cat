import { Demo } from './demo.model';

export class Operator {
  constructor(
    public title: string,
    public categoryTitle: string,
    public demos: Demo[] = []
  ) {}
}
