import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { CardTypeModel } from "../../../models/card/card-type.model";

@Injectable({
    providedIn : 'root'
})
export class GetAllCatalogCard{
    private readonly http = inject(HttpClient);
    private readonly _apiUrl = `${environment.magicTradeApiUrl}catalog/`;

    execute(url : String): Observable<CardTypeModel> {
        return this.http.get<CardTypeModel>(this._apiUrl + url);
      }
}