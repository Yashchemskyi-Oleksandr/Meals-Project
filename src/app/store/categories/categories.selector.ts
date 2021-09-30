import { createSelector } from '@ngrx/store';

import { Category } from './categories.model';
import { AppState } from './../app.state';

export const selectCategories = createSelector(
  (state: AppState) => state.categories,
  (categories: Category[]) => categories
);
