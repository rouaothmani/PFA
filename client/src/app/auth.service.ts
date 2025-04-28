import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // Use BehaviorSubject
  private tokenKey = "token";
  private refreshTokenKey = "refreshToken";
  private userRoleKey = "userRole";
  private expirationTimeKey = "tokenExpiration";
  private apiUrl = "http://localhost:3000/api/auth"; // Replace with your API endpoint

  constructor(private http: HttpClient) {
    this.loadAuthState();
  }

  // Observable to track login state changes
  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  private loadAuthState() {
    const token = localStorage.getItem(this.tokenKey);
    const expirationTime = localStorage.getItem(this.expirationTimeKey);

    if (token && expirationTime) {
      const now = new Date().getTime();
      if (now < Number(expirationTime)) {
        this.loggedIn.next(true); // Still logged in
      } else {
        this.logout(); // Token expired
      }
    }
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response) => {
        if(response.token && response.refreshToken && response.role){
          this.setSession(response.token, response.refreshToken, response.role);
        }

      }),
      catchError((error) => {
        console.error("Login failed:", error);
        return throwError(() => error);
      })
    );
  }
  loginWithToken(token: string): void {
    console.log('Logging in with token:', token);
    localStorage.setItem(this.tokenKey, token);
    this.loggedIn.next(true);
  }

  logout(): void {
    console.log('Logging out');
    localStorage.removeItem(this.tokenKey);
    this.loggedIn.next(false);
  }



  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem(this.refreshTokenKey);
    if (!refreshToken) {
      return throwError(() => "No refresh token found");
    }

    return this.http
      .post<any>(`${this.apiUrl}/refresh`, {
        refreshToken: refreshToken,
      })
      .pipe(
        tap((response) => {
          if(response.token){
             this.setSession(response.token, refreshToken, localStorage.getItem(this.userRoleKey)!);
          }
        }),
        catchError((error) => {
          console.error("Refresh token failed:", error);
          this.logout(); // Logout if refresh fails
          return throwError(() => error);
        })
      );
  }

  private setSession(token: string, refreshToken: string, userRole: string) {
    const expirationTime = new Date().getTime() + 3600 * 1000; // 1 hour expiration

    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
    localStorage.setItem(this.userRoleKey, userRole);
    localStorage.setItem(this.expirationTimeKey, String(expirationTime));
    this.loggedIn.next(true); // Update login state
  }


  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
