import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  getCategories() {
    return this.http.get(this.url);
  }
}
