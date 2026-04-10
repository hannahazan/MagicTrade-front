import { Injectable, signal, WritableSignal } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class CatalogFilterUrl{

    catalogFilterUrl:WritableSignal<string> = signal('')

    setCatalogFilterUrl(url : string):void{
        this.catalogFilterUrl.set(url);
    }

    getCatalogFilterUrl(){
        return this.catalogFilterUrl();
    }
}