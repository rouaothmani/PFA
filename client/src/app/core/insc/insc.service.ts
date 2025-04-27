import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscService {
  private Url = 'http://localhost:3000/insc';

  constructor(private http: HttpClient) { }

  checkCinExists(cinNumber: string): Observable<{ exists: boolean }> {
    return this.http.get<{ exists: boolean }>(`${this.Url}/exists`, {
      params: { number: cinNumber }
    });
  }
}
