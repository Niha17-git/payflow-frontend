import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReconciliationService {
  private baseUrl = 'https://localhost:7212/api/Reconciliation';
  constructor(private http: HttpClient) {}

  getResults(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  reconcileOrder(orderId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${orderId}`, {});
  }
}