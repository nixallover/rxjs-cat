import { Demo } from '../models/demo.model';
import { Operator } from '../models/operator.model';
import { OperatorCategory } from '../models/operator-category.model';

export const createOperatorCategoryList = (): OperatorCategory[] => {
  return [
    new OperatorCategory(
      'Filtering',
      [
        new Operator('filter', 'Filtering'),
        new Operator('first', 'Filtering'),
        new Operator('sample', 'Filtering'),
        new Operator('skip', 'Filtering'),
        new Operator('skipUntil', 'Filtering'),
        new Operator('skipWhile', 'Filtering'),
        new Operator('take', 'Filtering'),
        new Operator('takeWhile', 'Filtering'),
        new Operator('throttle', 'Filtering'),
        new Operator('throttleTime', 'Filtering'),
      ]
    ),
    new OperatorCategory(
      'Transformation',
      [
        new Operator('map', 'Transformation'),
      ]
    ),
    new OperatorCategory(
      'Mathematical',
      [
        new Operator('count', 'Mathematical'),
      ]
    )
  ];
};
