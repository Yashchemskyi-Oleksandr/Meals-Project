import {
  getCategories,
  updateCategory,
  createCategory,
} from './categories.action';
import { createReducer, on } from '@ngrx/store';
import { Categories } from './categories.model';

export const initialState: Categories[] = [];

// const categories = [
//   // this own state
//   {}, // first
//   {}, // second
//   {},
// ];

export const categoriesReducer = createReducer(
  initialState,
  on(getCategories, (state, { categories }) => {
    return categories;
  }),

  on(updateCategory, (state, { updatedCategory }) => {
    console.log(updatedCategory);
    const updatedIndex = state.findIndex(
      (category) => category.id === updatedCategory.id
    );
    console.log(updatedIndex);
    const newCategories = [...state];

    newCategories[updatedIndex] = {
      ...newCategories[updatedIndex],
      categoryName: updatedCategory.categoryName,
    };
    console.log(newCategories);

    // return category;
    return newCategories; //найти категорію яку надо обновити , оновити дані в ный і вернути масів де будет категорія оновленна
  }),

  on(createCategory, (state, { newCategory }) => {
    console.log(newCategory);

    return [...state, newCategory];
  })
);
