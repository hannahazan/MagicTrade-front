import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {LoginCredentials} from "../../models/login-credentials.model";
import {jwtDecode, JwtPayload} from "jwt-decode";
import {JwtCustomPayload} from "../../models/jwt-custom-payload.model";
import {Profile} from "../../models/user/profile.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _apiUrl = environment.magicTradeApiUrl;
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  login(loginCredentials: LoginCredentials): Observable<string> {
    return this.http
      .post(`${this._apiUrl}auth/login`, { email: loginCredentials.email, password: loginCredentials.password }, { responseType: 'text' })
      .pipe(
        tap((token) => {
          this.saveToken(token);
        })
      );
  }

  getCurrentUser(): Observable<Profile> {
    return this.http.get<Profile>(`${this._apiUrl}auth/Myprofile`);
  }

  logout(): void {
    this.clearToken();
    this.router.navigate(['/login']);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      const decodedToken: JwtCustomPayload = jwtDecode(token);
      // Les users ont un seul rôle donc on prend le premier (pas de table de jointure user_role dans le back)
      return decodedToken.roles?.[0]?.authority ?? null;
    } catch {
      return null;
    }
  }

  verifyToken(): void {
    const token = this.getToken();
    if (!token) return;

    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      if (!decodedToken.exp) {
        this.clearToken();
        return
      }

      const expiryDate = new Date(decodedToken.exp * 1000);
      if (expiryDate < new Date()) {
        this.clearToken();
      }
    } catch {
      this.clearToken();
    }
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      if (!decodedToken.exp) {
        this.clearToken();
        return false;
      }

      const expiryDate = new Date(decodedToken.exp * 1000);
      if (expiryDate < new Date()) {
        this.clearToken();
        return false;
      }

      return true;
    } catch {
      this.clearToken();
      return false;
    }
  }

  isAdmin(): boolean {
    if (!this.isLoggedIn()) return false;
    return this.getUserRole() === "ROLE_ADMIN";
  }

}
