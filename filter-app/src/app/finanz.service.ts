import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanzService {
  private apiUrl = 'http://localhost:8001/api/finanz';

  constructor(private http: HttpClient) { }

  getFinanz(type?: string): Observable<any[]> {
    let url = this.apiUrl;
    if (type) {
      url += `?vorgangsart=${type}`;
    }
    return this.http.get<any[]>(url);
  }
}
