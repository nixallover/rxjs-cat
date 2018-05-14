import { Component, OnInit, Input } from '@angular/core';
import { MarbleDemo } from '../marble-demo.model';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  @Input() demo: MarbleDemo;

  constructor() { }

  ngOnInit() {
  }

}
