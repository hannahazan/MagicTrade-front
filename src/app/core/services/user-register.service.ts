import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserRegister } from '../../models/user-register.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  private readonly http = inject(HttpClient);

  private readonly _baseUrl = "http://localhost:8080/magicTrade-api/auth/register";

  execute(user: UserRegister): Observable<object> {
    return this.http.post<object>(this._baseUrl, user);
  }
}
