import { CategoryService } from 'src/app/services/category.service';
import { MealsService } from 'src/app/services/meals.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public meals: any = [];
  public categories: any = [];
  public filteredMeals: any = [];
  public newData: any = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private mealsService: MealsService,
    private categoryService: CategoryService
  ) {}

  // onSubmit(data:any) {
  //   console.log(data);
  //   }

  filter(query: string) {
    this.filteredMeals = query
      ? this.meals.filter((p: any) =>
          p.name.toLowerCase().includes(query.toLocaleLowerCase())
        )
      : this.meals;
  }

  onSubmit(data: any) {
    this.http
      .post('http://localhost:7000/api/categories', data)
      .subscribe((result) => {
        console.log('result', result);
      });
    console.log(data);
  }

  ngOnInit(): void {
    this.mealsService.getMeals().subscribe((allMeals) => {
      this.meals = allMeals;
      this.filteredMeals = allMeals;
      console.log(this.filteredMeals);

      this.categoryService.getCategories().subscribe((cat) => {
        this.categories = cat;
        console.log(cat);

        for (let meal of this.meals) {
          for (let cat of this.categories) {
            if (meal.categoryId === cat.id) {
              meal.categoryName = cat.categoryName;
              console.log(this.meals);

              console.log(meal);
            }
          }
        }
      });
    });

    // this.mealsService
    //   .getMealsByCategories(this.id)
    //   .subscribe((mealsCat: any) => {
    //     console.log(mealsCat);
    //     this.filteredMeals = mealsCat;
    //     console.log(this.filteredMeals);
    //   });
  }
}
