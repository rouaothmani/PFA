import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MdpService {

  private apiUrl = 'http://localhost:3000/update-password';

  constructor(private http: HttpClient) {}

  updatePassword(cin: number, pass: string): Observable<any> {
    const data = { cin, pass};
    return this.http.put(this.apiUrl, data);
  }
}
