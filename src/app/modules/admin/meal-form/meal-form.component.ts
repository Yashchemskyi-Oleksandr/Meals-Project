import { MealsService } from 'src/app/services/meals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
// import 'rxjs/add/operator/take';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss'],
})
export class MealFormComponent implements OnInit {
  public categories: any = [];
  public meal: any = [];
  id: any;

  constructor(
    private categoryService: CategoryService,
    private mealsService: MealsService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  saveNewMeal(product: any) {
    if (this.id) {
      this.mealsService.updateByIdMeal(this.id, product).subscribe((result) => {
        console.log('resultSubscribe', result);
      });
    } else {
      this.mealsService.createMeal(product).subscribe((result) => {
        console.log('result', result);
      });
    }
    this.router.navigate(['/admin']);
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((cat) => {
      this.categories = cat;
      console.log(cat);
    });

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    if (this.id) {
      this.mealsService.getByIdMeal(this.id).subscribe((m) => {
        console.log(m);

        return (this.meal = m);
      });
    }
    console.log(this.meal);
  }
}
