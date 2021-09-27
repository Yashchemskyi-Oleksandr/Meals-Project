// import { Info } from './../interface/info';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../store/info/info.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor(private http: HttpClient) {}

  createInfo(info: any): Observable<Info> {
    let url = 'http://localhost:7000/api/info';
    return this.http.post<Info>(url, info);
  }

  getAllInfo(): Observable<Info> {
    let url = 'http://localhost:7000/api/info';
    return this.http.get<Info>(url);
  }

  updateInfoById(info: Info, id: string) {
    let url = `http://localhost:7000/api/info/${id}`;
    return this.http.put(url, info);
  }
}
