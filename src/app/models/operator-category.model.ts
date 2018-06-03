import { Operator } from './operator.model';

export class OperatorCategory {
  constructor(
    public title: string,
    public operators: Operator[] = []
  ) {}
}
