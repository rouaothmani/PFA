import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../envirments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }

  login(cin: number, password: string): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${environment.ApiTarget}/auth/login`, {cin, password});
  }
}
