import { createAction, props } from '@ngrx/store';

import { Categories } from './categories.model';

export const getCategories = createAction(
  'GET_CATEGORIES',
  props<{ categories: Categories[] }>()
);

export const updateCategory = createAction(
  'UPDATE_CATEGORY',
  props<{ updatedCategory: Categories }>()
);

export const createCategory = createAction(
  'CREATE_CATEGORY',
  props<{ newCategory: Categories }>()
);
