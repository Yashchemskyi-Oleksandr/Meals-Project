import { Category } from './categories/categories.model';
import { Info } from './info/info.model';
import { MealsState } from './meals/meals.reducer';

export interface AppState {
  meals: MealsState;
  categories: Category[];
  info: Info;
}
