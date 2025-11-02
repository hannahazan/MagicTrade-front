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

  // Ajoute une carte à la collection de l'utilisateur connecté
  execute(card: CollectionCard): Observable<void> {
    return this.http.post<void>(this._apiUrl, card);
  }

  // Récupère la collection de l'utilisateur connecté
  getUserCollection(): Observable<CollectionCard[]> {
    return this.http.get<CollectionCard[]>(`${this._apiUrl}/MyCollection`);
  }

  // Récupère la collection d'un autre utilisateur (optionnel)
  getCollectionByUserId(userId: number): Observable<CollectionCard[]> {
    return this.http.get<CollectionCard[]>(`${this._apiUrl}/${userId}`);
  }

  // Supprime un élément de la collection de l'utilisateur connecté
  deleteFromCollection(collectionId: number): Observable<void> {
    return this.http.delete<void>(`${this._apiUrl}/MyCollection/${collectionId}`);
  }
}
