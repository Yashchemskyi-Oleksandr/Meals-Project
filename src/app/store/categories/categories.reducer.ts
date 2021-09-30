import { createReducer, on } from '@ngrx/store';

import {
  getCategories,
  updateCategory,
  createCategory,
  deleteCategory,
} from './categories.action';
import { Category } from './categories.model';

export const initialState: Category[] = [];

export const categoriesReducer = createReducer(
  initialState,
  on(getCategories, (state, { categories }) => {
    return categories;
  }),

  on(updateCategory, (state, { updatedCategory }) => {
    const updatedIndex = state.findIndex(
      (category) => category.id === updatedCategory.id
    );
    const newCategories = [...state];

    newCategories[updatedIndex] = {
      ...newCategories[updatedIndex],
      categoryName: updatedCategory.categoryName,
    };

    return newCategories;
  }),

  on(createCategory, (state, { newCategory }) => {
    return [...state, newCategory];
  }),
  on(deleteCategory, (state, { id }) => {
    const updatedCategory = state.filter((category: Category) => {
      return category.id !== id;
    });

    return updatedCategory;
  })
);
