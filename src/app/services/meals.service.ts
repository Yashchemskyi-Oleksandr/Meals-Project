import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Meals } from '../store/meals/meals.model';
@Injectable({
  providedIn: 'root',
})
export class MealsService {
  constructor(private http: HttpClient) {}

  createMeal(meal: Meals): Observable<Meals> {
    let url = 'http://localhost:7000/api/meals';
    return this.http.post<Meals>(url, meal);
  }

  getMeals(categoryId: string = ''): Observable<Meals[]> {
    let url = `http://localhost:7000/api/meals/${categoryId}`;
    return this.http.get<Meals[]>(url);
  }

  getMealsByCategories(id: string): Observable<Meals[]> {
    let url = `http://localhost:7000/api/meals/:${id}`;
    return this.http.get<Meals[]>(url);
  }

  getByIdMeal(productId: string): Observable<Meals> {
    let url = `http://localhost:7000/api/meals/edit-meal/${productId}`;
    return this.http.get<Meals>(url);
  }

  updateByIdMeal(productId: string, product: Meals): Observable<Meals> {
    let url = `http://localhost:7000/api/meals/${productId}`;
    return this.http.put<Meals>(url, { ...product });
  }

  deleteByIdMeal(productId: string): Observable<Meals[]> {
    let url = `http://localhost:7000/api/meals/${productId}`;
    return this.http.delete<Meals[]>(url);
  }
}
