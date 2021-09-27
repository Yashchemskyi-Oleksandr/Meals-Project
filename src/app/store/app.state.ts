import { Categories } from './categories/categories.model';
import { Info } from './info/info.model';
import { Meals } from './meals/meals.model';
import { MealsState } from './meals/meals.reducer';

//// зберігаються всі типи моїх стейтів
export interface AppState {
  meals: MealsState;
  categories: Categories[];
  info: Info;
}
