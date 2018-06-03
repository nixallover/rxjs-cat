import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Demo } from '../models/demo.model';
import {
  createFilteringOperatorDemoList,
  createMathematicalOperatorDemoList,
  createTransformationOperatorDemoList
} from '../data/operator-demos';

import { OperatorCategory } from '../models/operator-category.model';
import { Operator } from '../models/operator.model';
import { createOperatorCategoryList } from '../data/operator-category-list';

@Component({
  selector: 'app-demo-settings-form',
  templateUrl: './demo-settings-form.component.html',
  styleUrls: ['./demo-settings-form.component.scss']
})
export class DemoSettingsFormComponent implements OnInit {
  @Input() isPlaying: boolean;
  @Output() demoChosen = new EventEmitter();
  @Output() play = new EventEmitter();
  @Output() stop = new EventEmitter();

  // data
  filterDemos: Demo[] = createFilteringOperatorDemoList();
  operatorCategories: OperatorCategory[] = createOperatorCategoryList();

  // state/config
  activeCategory: OperatorCategory;
  activeOperator: Operator;
  activeDemo: Demo;

  constructor() { }

  ngOnInit() {
    this.attachDemosToCategories();

    // set defaults
    this.setActiveCategory();
  }

  attachDemosToCategories(): void {
    const buckets = {};

    this.filterDemos.forEach((demo: Demo) => {
      if (!buckets[demo.operatorTitle]) {
        buckets[demo.operatorTitle] = [];
      }
      buckets[demo.operatorTitle].push(demo);
    });

    this.operatorCategories.forEach((category: OperatorCategory) => {
      category.operators.forEach((operator: Operator) => {
        operator.demos = buckets[operator.title];
      });
    });
  }

  setActiveCategory(index: number = 0): void {
    this.activeCategory = this.operatorCategories[index];
    this.setActiveOperator();
  }

  setActiveOperator(index: number = 0): void {
    this.activeOperator = this.activeCategory.operators[index];
    this.setActiveDemo();
  }

  setActiveDemo(index: number = 0): void {
    this.activeDemo = this.activeOperator.demos[index];
    this.demoChosen.emit(this.activeDemo);
  }

}
