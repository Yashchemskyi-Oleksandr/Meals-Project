import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { getInfo } from './store/info/info.action';
import { InfoService } from 'src/app/services/info.service';
import { getMeals } from 'src/app/store/meals/meals.action';
import { getCategories } from './store/categories/categories.action';
import { CategoryService } from 'src/app/services/category.service';
import { MealsService } from './services/meals.service';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';

  constructor(
    private mealsService: MealsService,
    private categoryService: CategoryService,
    private infoService: InfoService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.store.dispatch(getCategories({ categories }));
    });

    this.mealsService.getMeals().subscribe((meals) => {
      this.store.dispatch(getMeals({ meals }));
    });

    this.infoService.getAllInfo().subscribe((info) => {
      this.store.dispatch(getInfo({ info }));
    });
  }
}
