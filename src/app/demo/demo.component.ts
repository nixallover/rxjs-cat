import { Component, OnInit, Input } from '@angular/core';

import { Demo } from '../models/demo.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @Input() demo: Demo;
  // @Input() overlay: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
