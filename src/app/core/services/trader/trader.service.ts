import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TraderPreview } from '../../../models/trader-preview.model';
import { OwnerObject } from '../../../models/ownerObject-model';
import {Profile} from "../../../models/user/profile.model";

@Injectable({ providedIn: 'root' })
export class TraderService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.magicTradeApiUrl}auth/profiles`;
  private readonly apiCollectionUrl = `${environment.magicTradeApiUrl}collections`;

  getAllTraders(): Observable<TraderPreview[]> {
    return this.http.get<{ users: Profile[] }>(this.apiUrl).pipe(
      map(res => res.users.map(u => ({
        id: u.id,
        pseudo: u.pseudo,
        country: u.country,
        department: u.department,
        city: u.city,
        profilePicture: 'dragon.png',
        collectionCount: 0,
        rate: 0
      })))
    );
  }

  getCardOwners(cardId: string): Observable<OwnerObject> {
    return this.http.get<OwnerObject>(`${this.apiCollectionUrl}/${cardId}/users`);
  }
}
