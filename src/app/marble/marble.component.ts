import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-marble',
  templateUrl: './marble.component.html',
  styleUrls: ['./marble.component.scss']
})
export class MarbleComponent implements OnInit {
  colorNum: number;

  constructor() { }

  ngOnInit() {
    this.colorNum = _.random(1, 5, false);
  }

}
