import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Card} from "../../models/card.model";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class CardService {
  private readonly _apiUrl = environment.magicTradeApiUrl;

  constructor(private http: HttpClient) {}

  getCards(): Observable<{ cards: Card[] }> {
    return this.http.get<{ cards: Card[] }>(`${this._apiUrl}cards`);
  }
}
