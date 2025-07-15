import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserRegister } from '../../models/user-register.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  private readonly http = inject(HttpClient);

  private readonly baseUrl = "http://localhost:8080/magicTrade-api/auth/register";

  private readonly _userExample = {
    "email": "ajani@example.com",
    "password": "StrongP@ssw0rd!",
    "pseudo": "AjaniLion",
    "firstName": "Ajani",
    "lastName": "Goldmane",
    "country": "Naya",
    "department": "Sunspire",
    "city": "Jund City"
  }

  execute(user: UserRegister = this._userExample): Observable<object> {
    return this.http.post<object>(this.baseUrl, user);
  }
  
}
