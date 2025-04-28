import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../envirments/environment';
import { AuthService } from '../auth.service';

interface LoginResponse {
  success: boolean;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(cin: number, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.ApiTarget}/auth/login`, {cin, password}).pipe(
      tap(response => { if (response.success) this.authService.login(response.token); })
    );
  }
}
