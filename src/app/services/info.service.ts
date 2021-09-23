import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor(private http: HttpClient) {}

  getAllInfo() {
    let url = 'http://localhost:7000/api/info';
    return this.http.get(url);
  }
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
