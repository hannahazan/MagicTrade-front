import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {WishlistCard} from "../../../models/wishlist/wishlist-card";

@Injectable({
  providedIn: 'root'
})
export class GetUserWishlistService {

  private readonly http = inject(HttpClient);
  private readonly _apiUrl = `${environment.magicTradeApiUrl}`;

  execute(): Observable<WishlistCard[]> {
    return this.http.get<WishlistCard[]>(`${this._apiUrl}wishlist`);
  }
}
