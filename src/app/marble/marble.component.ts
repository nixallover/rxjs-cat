import { Component, OnInit, Input } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-marble',
  templateUrl: './marble.component.html',
  styleUrls: ['./marble.component.scss']
})
export class MarbleComponent implements OnInit {
  @Input() colorNum: number;

  constructor() { }

  ngOnInit() {
    // this.colorNum = _.random(1, 5, false);
  }

}
