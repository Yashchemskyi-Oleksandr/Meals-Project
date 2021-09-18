import { Component, OnInit } from '@angular/core';
import { mock } from './meals.mock';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {

  data = mock;

  constructor() { }

  ngOnInit(): void {
  }

}
