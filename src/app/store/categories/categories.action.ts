import { createAction, props } from '@ngrx/store';

import { Category } from './categories.model';

export const getCategories = createAction(
  'GET_CATEGORIES',
  props<{ categories: Category[] }>()
);

export const updateCategory = createAction(
  'UPDATE_CATEGORY',
  props<{ updatedCategory: Category }>()
);

export const createCategory = createAction(
  'CREATE_CATEGORY',
  props<{ newCategory: Category }>()
);

export const deleteCategory = createAction(
  'DELETE_CATEGORY',
  props<{ id: string }>()
);
