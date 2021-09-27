import { Categories } from './categories.model';
import { AppState } from './../app.state';
import { createSelector } from '@ngrx/store';

export const selectCategories = createSelector(
  (state: AppState) => state.categories,
  (categories: Categories[]) => categories
);
