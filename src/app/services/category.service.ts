import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../store/categories/categories.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  // constructor(private http: HttpClient) {}
  // getCategories() {
  //   let url = 'http://localhost:7000/api/categories';
  //   return this.http.get(url);
  // }
  private url = 'http://localhost:7000/api/categories';

  constructor(private http: HttpClient) {}

  createCategory(data: any): Observable<Categories> {
    return this.http.post<Categories>(this.url, data);
  }

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.url);
  }

  getCategoryById(categoryId: string): Observable<Categories> {
    let url = `http://localhost:7000/api/categories/${categoryId}`;
    return this.http.get<Categories>(url);
  }

  updateByIdCategory(
    categoryId: string,
    category: Categories
  ): Observable<Categories> {
    let url = `http://localhost:7000/api/categories/${categoryId}`;
    return this.http.patch<Categories>(url, category);
  }

  deleteCategoryById(categoryId: string): Observable<Categories> {
    let url = `http://localhost:7000/api/categories/${categoryId}`;
    return this.http.delete<Categories>(url);
  }
}
