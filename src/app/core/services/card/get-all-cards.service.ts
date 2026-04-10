import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { CardList } from '../../../models/card/cardList.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CardFilters } from '../../../models/CardFilters';
import { PaginationCursor } from '../../../models/PaginationCursor';
import { PaginationPages } from '../../../models/PaginationPages';

@Injectable({
  providedIn: 'root'
})
export class GetAllCardsService {
  private readonly http = inject(HttpClient);
  private readonly _apiUrl = `${environment.magicTradeApiUrl}`;

  execute(filters: CardFilters, paginationCursor : PaginationCursor[], paginationPages : PaginationPages): Observable<CardList> {
    let params = new HttpParams();

    if (filters.color && filters.color.length) {
    const colorsParam = filters.color.join(',');
    params = params.set('colors', colorsParam);
    }

    if(filters.type && filters.type.length){
      const typeParam = filters.type.join(',')
      params = params.set('types', typeParam)
    }

    if(filters.rarities && filters.rarities.length){
      const raritiesParam = filters.rarities.join(',')
      params = params.set('rarities', raritiesParam)
    }

    if (filters.set) params = params.set('set-id', filters.set);
    if (filters.ccm) params = params.set('cmc', filters.ccm);
    if (filters.name) params = params.set('name', filters.name);
    if(filters.standard) params = params.set('standard',filters.standard);
    if(filters.pioneer) params = params.set('pioneer', filters.pioneer);
    if(filters.modern) params = params.set('modern', filters.modern);
    if(filters.legacy) params = params.set('legacy', filters.legacy);
    if(filters.pauper) params = params.set('pauper',filters.pauper);
    if(filters.vintage) params = params.set('vintage', filters.vintage);
    if(filters.commander) params = params.set('commander', filters.commander);
    if(filters.brawl) params = params.set('brawl', filters.brawl);
    if(filters.pauperCommander) params = params.set('pauperCommander', filters.pauperCommander);
    if(filters.duel) params = params.set('duel', filters.duel);
    if(filters.oldSchool) params = params.set('oldSchool', filters.oldSchool);
    if(filters.text) params = params.set('text', filters.text);
    
    if(paginationCursor.length > 0){
        if(paginationPages.currentPage > paginationPages.previousPage){
          params = params.set('lastId', paginationCursor[paginationPages.previousPage -1].nextCursorFirstEntry)
        }

        if(paginationPages.currentPage < paginationPages.previousPage){
          params = params.set('lastId', paginationCursor[paginationPages.currentPage -1].previousCursorFisrtEntry)
        }
    }
    
    return this.http.get<CardList>(`${this._apiUrl}cards`, { params });
  }
}
