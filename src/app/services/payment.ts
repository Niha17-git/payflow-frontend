import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private baseUrl = 'https://localhost:7212/api/Payment';
  constructor(private http: HttpClient) {}

  getPayments(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  importPayments(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.baseUrl}/import`, formData);
  }
}