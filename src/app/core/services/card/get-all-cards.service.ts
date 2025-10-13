import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { CardList } from '../../../models/card/cardList.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllCardsService {
  private readonly http = inject(HttpClient);
  private readonly _apiUrl = `${environment.magicTradeApiUrl}`;

  execute(filters: { set: string; type: string; rarity: string; color: string; ccm: string }): Observable<CardList> {
    let params = new HttpParams();

    if (filters.set) params = params.set('set-id', filters.set);
    if (filters.type) params = params.set('types', filters.type);
    if (filters.rarity) params = params.set('rarities', filters.rarity);
    if (filters.color) params = params.set('colors', filters.color);
    if (filters.ccm) params = params.set('cmc', filters.ccm);

    console.log('Requête GET avec filtres :', params.toString());

    return this.http.get<CardList>(`${this._apiUrl}cards`, { params });
  }
}
