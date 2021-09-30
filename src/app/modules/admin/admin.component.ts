import { select, Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/store/app.state';
import { Meals } from 'src/app/store/meals/meals.model';
import { MealsService } from 'src/app/services/meals.service';
import { selectMealsBySearch } from 'src/app/store/meals/meals.selector';
import { applySearch, deleteMeal } from 'src/app/store/meals/meals.action';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  meals: Observable<Meals[]> = this.store.pipe(select(selectMealsBySearch));

  constructor(
    private mealsService: MealsService,
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {}

  search(query: string) {
    this.store.dispatch(applySearch({ search: query }));
  }

  delete(id: string) {
    if (confirm('Are you sure you want to delete this product')) {
      this.mealsService.deleteByIdMeal(id).subscribe(
        (result) => {
          this.store.dispatch(deleteMeal({ id: id }));
          this.notificationService.success('Meal was deleted');
        },
        (error) => {
          const { message } = error.error;
          this.notificationService.error(message);
        }
      );
    }
  }
}
