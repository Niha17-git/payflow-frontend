import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExceptionService {
  private baseUrl = 'https://localhost:7212/api/Exception';
  constructor(private http: HttpClient) {}

  getExceptions(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  resolveException(id: number, resolutionNotes: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}/resolve`, { resolutionNotes });
  }
}