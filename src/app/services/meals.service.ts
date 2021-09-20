import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  // constructor(private http: HttpClient) {}
  // public meals: any = [];
  //   getMeals() {
  //     let url = 'http://localhost:7000/api/meals';
  //     return this.http.get(url).subscribe((response) => {
  //       this.meals = response;
  //     });
  //   }

  constructor(private http: HttpClient) {}

  getMeals() {
    let url = 'http://localhost:7000/api/meals';
    return this.http.get(url);
  }

  getMealsByCategories(id: string) {
    let url = `http://localhost:7000/api/meals/:${id}`;
    return this.http.get(url);
  }
}
