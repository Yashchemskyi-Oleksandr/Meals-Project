import { CategoryService } from 'src/app/services/category.service';
import { MealsService } from './../../../services/meals.service';
import { Component, OnInit } from '@angular/core';
// import { mock } from './meals.mock';
// import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Dishes } from 'src/app/interface/dishes';
import { RouterModule, Route } from '@angular/router';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit {
  public meals: any = [];
  public categories: any = [];
  public category: any;
  public filteredMeals: any = [];
  public id: any = '';

  constructor(
    private route: ActivatedRoute,
    private mealsService: MealsService,
    private categoryService: CategoryService
  ) {}

  onClickCategory(categoryId: string) {
    console.log(categoryId);

    this.filteredMeals = this.meals.filter((meal: any) => {
      console.log(meal);

      return meal.categoryId === categoryId;
    });
    console.log(this.filteredMeals);
  }

  ngOnInit(): void {
    this.mealsService.getMeals().subscribe((allMeals) => {
      this.meals = allMeals;
      this.filteredMeals = allMeals;
      console.log(this.filteredMeals);
    });

    this.categoryService.getCategories().subscribe((cat) => {
      this.categories = cat;
      console.log(cat);
    });

    this.mealsService
      .getMealsByCategories(this.id)
      .subscribe((mealsCat: any) => {
        console.log(mealsCat);
        this.filteredMeals = mealsCat;
        console.log(this.filteredMeals);
      });
  }
}
