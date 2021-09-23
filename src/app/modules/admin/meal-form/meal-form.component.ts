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
  public meal: any = {};

  constructor(
    private categoryService: CategoryService,
    private mealsService: MealsService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  saveNewMeal(product: any) {
    this.http
      .post('http://localhost:7000/api/meals', product)
      .subscribe((result) => {
        console.log('result', result);
      });
    console.log(product);
    this.router.navigate(['/admin']);
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((cat) => {
      this.categories = cat;
      console.log(cat);
    });

    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id) {
      this.mealsService.getByIdMeal(id).subscribe((m) => {
        console.log(m);

        this.meal = m;
      });
    }
    console.log(this.meal);
  }
}
