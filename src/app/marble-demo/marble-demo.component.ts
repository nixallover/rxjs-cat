import { Component, OnInit, Input } from '@angular/core';
import { MarbleDemo } from '../marble-demo.model';

@Component({
  selector: 'app-marble-demo',
  templateUrl: './marble-demo.component.html',
  styleUrls: ['./marble-demo.component.scss']
})
export class MarbleDemoComponent implements OnInit {
  @Input() demo: MarbleDemo;
  @Input() overlay: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
