import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meals } from '../interface/dishes';

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

  getMeals(): Observable<Meals[]> {
    let url = 'http://localhost:7000/api/meals';
    return this.http.get<Meals[]>(url);
  }

  getMealsByCategories(id: string): Observable<Meals[]> {
    let url = `http://localhost:7000/api/meals/:${id}`;
    return this.http.get<Meals[]>(url);
  }

  getByIdMeal(productId: string): Observable<Meals[]> {
    let url = `http://localhost:7000/api/meals/edit-meal/${productId}`;
    return this.http.get<Meals[]>(url);
  }
}
