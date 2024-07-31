import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseUrl = 'http://localhost:8080/shops';

  constructor(private http: HttpClient) {}

  createShop(): Observable<number> {
    return this.http.post<number>(this.baseUrl, {});
  }

  saveModules(shopId: number, modules: any[]): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/${shopId}/modules`, modules);
  }
}
