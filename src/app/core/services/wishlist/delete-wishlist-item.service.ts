import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeleteWishlistItemService {
  private readonly http = inject(HttpClient);
  private readonly _apiUrl = `${environment.magicTradeApiUrl}`;

  execute(cardId: string): Observable<object> {
    return this.http.delete(`${this._apiUrl}wishlist/${cardId}`);
  }

}
