import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {UserCard} from "../../../models/user-card/user-card";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddWishlistItemService {

  private readonly http = inject(HttpClient);

  private readonly _apiUrl = `${environment.magicTradeApiUrl}`;

  execute(cardId: string): Observable<object> {
    return this.http.post(`${this._apiUrl}wishlist`, {cardId: cardId});
  }

}
