import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {map, Observable} from 'rxjs';
import {ScryfallSet} from "../../../models/card/card-set.model";

@Injectable({
  providedIn: 'root'
})
export class GetAllCardsSetsService {
  private readonly http = inject(HttpClient);
  private readonly _apiUrl = `${environment.magicTradeApiUrl}`;

  execute(): Observable<ScryfallSet[]> {
    return this.http.get<ScryfallSet[]>(`${this._apiUrl}sets`).pipe(
      map(sets =>
        sets.sort((a, b) => a.name.localeCompare(b.name))
      )
    );
  }
}
