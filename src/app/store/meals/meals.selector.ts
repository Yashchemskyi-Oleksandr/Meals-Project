import { AppState } from 'src/app/store/app.state';

import { createSelector } from '@ngrx/store';
import { Meals } from '../meals/meals.model';
import { MealsState } from './meals.reducer';

// const state = {
//     meals: {
//         data: [],
//         activeFilter: 'some filter',
//         search: 'search
//     }
// }

export const selectStore = (state: AppState) => state.meals;

export const selectMeals = createSelector(
  selectStore,
  (meals: MealsState) => meals.data
);

export const selectMealsByCategory = createSelector(
  selectStore,
  (meals: MealsState) => {
    if (!meals.activeCategory) return meals.data;

    return meals.data.filter((meal) => {
      return meal.categoryId === meals.activeCategory;
    });
  }
);

export const selectMealsBySearch = createSelector(
  selectStore,
  (meals: MealsState) => {
    const { search, data } = meals;

    if (!search) return data;
    return data.filter((meal) => {
      return meal.name.toLowerCase().includes(search?.toLowerCase());
    });
  }
);
