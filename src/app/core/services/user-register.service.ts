import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserRegister } from '../../models/user-register.model';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  private readonly http = inject(HttpClient);

  private readonly _apiUrl = `${environment.magicTradeApiUrl}auth/register`;

  execute(user: UserRegister): Observable<object> {
    return this.http.post<object>(this._apiUrl, user);
  }
}
