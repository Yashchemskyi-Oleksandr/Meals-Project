import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../store/categories/categories.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url = 'http://localhost:7000/api/categories';

  constructor(private http: HttpClient) {}

  createCategory(data: any): Observable<Category> {
    return this.http.post<Category>(this.url, data);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  getCategoryById(categoryId: string): Observable<Category> {
    let url = `http://localhost:7000/api/categories/${categoryId}`;
    return this.http.get<Category>(url);
  }

  updateByIdCategory(
    categoryId: string,
    category: Category
  ): Observable<Category> {
    let url = `http://localhost:7000/api/categories/${categoryId}`;
    return this.http.patch<Category>(url, category);
  }

  deleteCategoryById(categoryId: string): Observable<Category> {
    let url = `http://localhost:7000/api/categories/${categoryId}`;
    const red = this.http.delete<Category>(url);
    console.log('red', red);

    return red;
  }
}
