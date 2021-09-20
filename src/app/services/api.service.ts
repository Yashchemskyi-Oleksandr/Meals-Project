import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // constructor(private http: HttpClient) {}
  ///// переніс в сервіс категорій
  // getCategories() {
  //   let url = 'http://localhost:7000/api/categories';
  //   return this.http.get(url);
  // }
  //// переніс в серів страв
  // getMeals() {
  //   let url = 'http://localhost:7000/api/meals';
  //   return this.http.get(url);
  // }
  //// переніс в серів страв
  // getMealsByCategories() {
  //   let url = 'http://localhost:7000/api/meals/:categoryId';
  //   return this.http.get(url);
  // }
}
