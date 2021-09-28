import { MealsService } from 'src/app/services/meals.service';
import { applySearch, deleteMeal } from './../../store/meals/meals.action';
import { AppState } from 'src/app/store/app.state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meals } from 'src/app/store/meals/meals.model';
import { select, Store } from '@ngrx/store';
import { selectMealsBySearch } from 'src/app/store/meals/meals.selector';
import { Info } from 'src/app/store/info/info.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  meals: Observable<Meals[]>;

  constructor(
    private mealsService: MealsService,
    private store: Store<AppState>
  ) {
    this.meals = store.pipe(select(selectMealsBySearch));
  }

  search(query: string) {
    this.store.dispatch(applySearch({ search: query }));
  }

  delete(id: string) {
    if (confirm('Are you sure you want to delete this product')) {
      this.mealsService.deleteByIdMeal(id).subscribe((result) => {
        this.store.dispatch(deleteMeal({ id: id }));
      });
    }
  }

  ngOnInit(): void {}
}
