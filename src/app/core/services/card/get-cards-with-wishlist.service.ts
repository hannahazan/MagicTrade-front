import {inject, Injectable} from '@angular/core';
import {GetAllCardsService} from "./get-all-cards.service";
import {GetUserWishlistService} from "../wishlist/get-user-wishlist.service";
import {DisplayedCard} from "../../../models/card/displayed-card.model";
import {Card} from "../../../models/card/card.model";
import {filter, forkJoin, map, Observable} from "rxjs";
import {mapCardsWithWishlist} from "../../../shared/mappers/cards-with-wishlist.mapper";
import {CardList} from "../../../models/card/cardList.model";

// Get cards list with wishlist additional property
@Injectable({
  providedIn: 'root'
})
export class GetCardsWithWishlistService {
  private readonly getAllCards = inject(GetAllCardsService);
  private readonly getUserWishlist = inject(GetUserWishlistService);

  execute(filters: {set: string; type: string; rarity: string; color: string; ccm: string; name?: string; }): Observable<CardList> {
    return forkJoin({
      cards: this.getAllCards.execute(filters),
      wishlist: this.getUserWishlist.execute()
    }).pipe(
      map((responses) => {
        return mapCardsWithWishlist(responses.cards, responses.wishlist);
      })
    )
  }
}
