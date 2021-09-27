import { Meals } from './meals.model';
import { createAction, props } from '@ngrx/store';

export const applyCategory = createAction(
  'APPLY_CATEGORY',
  props<{ id: string }>()
);

export const applySearch = createAction(
  'APPLY_SEARCH',
  props<{ search: string }>()
);

export const getMeals = createAction('GET_MEALS', props<{ meals: Meals[] }>());

export const createMeal = createAction(
  'CREATE_MEAL',
  props<{ newMeal: Meals }>()
);

export const updateMeal = createAction(
  'UPDATE_MEAL',
  props<{ updatedMeal: Meals }>()
);

export const deleteMeal = createAction('DELETE_MEAL', props<{ id: string }>());
