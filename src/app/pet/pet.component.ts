import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

import { Pet } from '../models/pet.model';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  @Input() pet: Pet;

  constructor() { }

  ngOnInit() {}

}
