import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient ,    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!sessionStorage.getItem('token');
    }
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('token');
    }
  }

  setAuthorization(token: string): void {

    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('token', token)
    }
  }
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }
  getAuthorization() {
    return sessionStorage.getItem('token');
   }
}
