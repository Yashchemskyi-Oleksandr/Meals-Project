import { Component, OnInit } from '@angular/core';
import { mock } from 'src/app/modules/home/meals/meals.mock';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  data = mock;

  constructor() { }

  ngOnInit(): void {
  }

}
