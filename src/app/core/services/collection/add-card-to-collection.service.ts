import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {UserCard} from "../../../models/user-card/user-card";

@Injectable({
  providedIn: 'root'
})
export class AddCardToCollectionService {
  private readonly http = inject(HttpClient);

  private readonly _apiUrl = `${environment.magicTradeApiUrl}`;

  execute(collection: UserCard[]): Observable<object> {
    return this.http.post(`${this._apiUrl}collections`, collection);
  }

}
