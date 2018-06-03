import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Demo } from '../models/demo.model';
import { createDemoList } from '../data/demo-list';

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
  demos: Demo[] = createDemoList();
  operatorCategories: OperatorCategory[] = createOperatorCategoryList();

  // state/config
  activeCategory: OperatorCategory;
  activeOperator: Operator;
  activeDemo: Demo;

  constructor() { }

  ngOnInit() {
    this.setActiveCategory(0);
    this.setActiveDemo(0);
  }

  setActiveCategory(index: number): void {
    this.activeCategory = this.operatorCategories[index];
  }

  setActiveOperator(index: number): void {
    this.activeOperator = this.activeCategory.operators[index];
  }

  setActiveDemo(index: number): void {
    this.activeDemo = this.demos[index];
    this.demoChosen.emit(this.activeDemo);
  }

}
