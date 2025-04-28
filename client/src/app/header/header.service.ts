import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../envirments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  login(cin: number, password: string): Observable<any> {
    console.log('cin :>> ', cin);
    console.log('password :>> ', password);
    return this.http.post<any>(`${environment.ApiTarget}/auth/login`, { cin, password }).pipe(map(response => this.authService.login(response.token)));
  }
}
