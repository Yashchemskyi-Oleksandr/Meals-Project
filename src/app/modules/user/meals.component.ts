import { Route, ActivatedRoute } from '@angular/router';
import { applyCategory, getMeals } from './../../store/meals/meals.action';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { selectCategories } from 'src/app/store/categories/categories.selector';
import { AppState } from 'src/app/store/app.state';
import { Meals } from 'src/app/store/meals/meals.model';
import { Categories } from 'src/app/store/categories/categories.model';

import { selectMealsByCategory } from 'src/app/store/meals/meals.selector';
import { MealsService } from 'src/app/services/meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit {
  meals: Observable<Meals[]> = this.store.pipe(select(selectMealsByCategory));
  categories: Observable<Categories[]> = this.store.pipe(
    select(selectCategories)
  );
  categoryId: string | null = null;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private mealsService: MealsService
  ) {}
  // filter on own store
  // -- save category to store
  // onClickCategory(categoryId: string) {
  //   this.store.dispatch(applyCategory({ id: categoryId }));
  // }

  // filter on backend side
  // ---everytime on click  send req to backend
  onClickCategory(categoryId: string) {
    this.mealsService.getMeals(categoryId).subscribe((meals) => {
      this.store.dispatch(getMeals({ meals }));
    });
  }

  ngOnInit(): void {
    // on first render -> send req to backend for getting filtered meals
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    if (this.categoryId) {
      this.mealsService.getMeals(this.categoryId).subscribe((meals) => {
        this.store.dispatch(getMeals({ meals }));
      });
    }
  }
}
