import { Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { Card } from "../models/card/card.model";
import { CardList } from "../models/card/cardList.model";
import { CardFilters } from "../models/CardFilters";

@Injectable({providedIn : 'root'})
export class GetFilters{

    private readonly initialFilters: CardFilters = {
    set: '',
    rarities: [],
    color: [],
    ccm: '',
    name: '',
    type:[],
    standard: '',
    pioneer: '',
    modern: '',
    legacy: '',
    pauper: '',
    vintage: '',
    commander: '',
    brawl: '',
    pauperCommander: '',
    duel: '',
    oldSchool: '',
    text : ''
  };

    filters: WritableSignal<CardFilters> = signal(this.initialFilters);

    setFilters(filtersParams: CardFilters):void{
        this.filters.set(filtersParams);
    }

    getFilters():CardFilters{
        return this.filters();
    }

}