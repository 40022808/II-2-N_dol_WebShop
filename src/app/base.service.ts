import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl = 'https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(this.baseUrl, product);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put(`https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/${id}.json`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`https://dolgozat-79584-default-rtdb.europe-west1.firebasedatabase.app/${id}.json`);
  }
}



