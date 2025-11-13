import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TraderPreview } from '../../../models/trader-preview.model';

@Injectable({ providedIn: 'root' })
export class TraderService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.magicTradeApiUrl}traders`;

  getAllTraders(): Observable<TraderPreview[]> {
    return this.http.get<TraderPreview[]>(this.apiUrl);
  }
}
