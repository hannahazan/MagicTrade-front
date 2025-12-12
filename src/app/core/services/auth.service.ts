import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject, catchError, finalize, map, Observable, of, switchMap, tap} from "rxjs";
import {LoginCredentials} from "../../models/login-credentials.model";
import {jwtDecode, JwtPayload} from "jwt-decode";
import {JwtCustomPayload} from "../../models/jwt-custom-payload.model";
import {Profile} from "../../models/user/profile.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly _apiUrl = environment.magicTradeApiUrl;
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  login(loginCredentials: LoginCredentials): Observable<void> {
    return this.http
      .post<void>(
        `${this._apiUrl}auth/login`,
        { email: loginCredentials.email, password: loginCredentials.password },
        { withCredentials: true }
      )
      .pipe(
        switchMap(() => this.refreshSession()),
        map(() => void 0)
      );
  }

  getCurrentUser(): Observable<Profile> {
    return this.http.get<Profile>(`${this._apiUrl}auth/Myprofile`);
  }

  logout(): void {
    this.http.post(`${this._apiUrl}auth/logout`, {}, { withCredentials: true })
      .pipe(
        // quoi qu’il arrive, UI = déconnecté
        finalize(() => this.loggedIn$.next(false))
      )
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: () => this.router.navigate(['/login']),
      });
  }

  getUserRole(): string | null {
    let token = ""
    this.getCurrentUser().subscribe({
      next: (data: Profile) => {
        token = data.role
      },
      error: err => console.error('Erreur récupération profil:', err)
    })
    if (!token) return null;
    return token

  }

  refreshSession() {
    return this.http.get(`${this._apiUrl}auth/Myprofile`, { withCredentials: true }).pipe(
      tap(() => this.loggedIn$.next(true)),
      catchError(() => {
        this.loggedIn$.next(false);
        return of(null);
      })
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn$.value;
  }

  isAdmin(): boolean {
    if (!this.isLoggedIn()) return false;
    return this.getUserRole() === "ROLE_ADMIN";
  }

}
