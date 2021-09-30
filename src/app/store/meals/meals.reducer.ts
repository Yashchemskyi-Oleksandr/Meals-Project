import { createReducer, on } from '@ngrx/store';

import {
  getMeals,
  applyCategory,
  applySearch,
  createMeal,
  updateMeal,
  deleteMeal,
} from './meals.action';
import { Meals } from './meals.model';

export interface MealsState {
  data: Meals[];
  activeCategory?: string;
  search?: string;
}

export const initialState: MealsState = {
  data: [],
};

export const mealsReducer = createReducer(
  initialState,
  on(getMeals, (state, { meals }) => {
    return { ...state, data: meals };
  }),
  on(applyCategory, (state, { id }) => {
    return { ...state, activeCategory: id };
  }),
  on(applySearch, (state, { search }) => {
    return { ...state, search };
  }),
  on(createMeal, (state, { newMeal }) => {
    return {
      ...state,
      data: [...state.data, newMeal],
    };
  }),
  on(updateMeal, (state, { updatedMeal }) => {
    const updatedIndex = state.data.findIndex((meal) => {
      return meal.id === updatedMeal.id;
    });
    const newMeals = [...state.data];
    newMeals[updatedIndex] = {
      ...newMeals[updatedIndex],
      ...updatedMeal,
    };

    return { ...state, data: newMeals };
  }),
  on(deleteMeal, (state, { id }) => {
    const updatedMeals = state.data.filter((meal) => {
      return meal.id !== id;
    });

    return { ...state, data: updatedMeals };
  })
);
