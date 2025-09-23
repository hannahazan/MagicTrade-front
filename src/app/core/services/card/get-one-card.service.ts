import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {CardList} from "../../../models/card/cardList.model";

@Injectable({
  providedIn: 'root'
})
export class GetOneCardService {
  private readonly http = inject(HttpClient);

  private readonly _apiUrl = `${environment.magicTradeApiUrl}`;

  execute(cardId: string): Observable<CardList> {
    return this.http.get<CardList>(`${this._apiUrl}cards?id=${cardId}`);
  }
}
