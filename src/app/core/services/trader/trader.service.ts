import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TraderPreview } from '../../../models/trader-preview.model';
import {Owner} from "../../../models/owner-model";
import {OwnerObject} from "../../../models/ownerObject-model";

@Injectable({ providedIn: 'root' })
export class TraderService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.magicTradeApiUrl}traders`;
  private readonly apiCollectionUrl = `${environment.magicTradeApiUrl}collections`;

  getAllTraders(): Observable<TraderPreview[]> {
    return this.http.get<TraderPreview[]>(this.apiUrl);
  }

  getCardOwners(cardId : String): Observable<OwnerObject> {
    return this.http.get<OwnerObject>(`${this.apiCollectionUrl}/${cardId}/users`);
  }
}
