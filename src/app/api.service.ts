import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCategories() {
    let url = 'http://localhost:7000/api/categories';
    return this.http.get(url);
  }
}
