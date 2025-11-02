import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../../environments/environment";
import {CollectionCard} from "../../../models/collection-card";

@Injectable({
  providedIn: 'root'
})
export class AddCardToCollectionService {
  private readonly http = inject(HttpClient);
  private readonly _apiUrl = `${environment.magicTradeApiUrl}collections`;

  execute(card: CollectionCard): Observable<void> {
    return this.http.post<void>(this._apiUrl, card);
  }

  getUserCollection(): Observable<CollectionCard[]> {
    return this.http.get<CollectionCard[]>(`${this._apiUrl}/mycollection`);
  }

  deleteFromCollection(collectionId: number): Observable<void> {
    return this.http.delete<void>(`${this._apiUrl}/mycollection/${collectionId}`);
  }
}
