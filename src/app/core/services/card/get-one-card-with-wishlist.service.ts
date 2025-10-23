import {inject, Injectable} from '@angular/core';
import {GetUserWishlistService} from "../wishlist/get-user-wishlist.service";
import {forkJoin, map, Observable} from "rxjs";
import {CardList} from "../../../models/card/cardList.model";
import {mapCardsWithWishlist} from "../../../shared/mappers/cards-with-wishlist.mapper";
import {GetOneCardService} from "./get-one-card.service";

@Injectable({
  providedIn: 'root'
})
export class GetOneCardWithWishlistService {
  private readonly getOneCard = inject(GetOneCardService);
  private readonly getUserWishlist = inject(GetUserWishlistService);

  execute(cardId: string): Observable<CardList> {
    return forkJoin({
      cards: this.getOneCard.execute(cardId),
      wishlist: this.getUserWishlist.execute()
    }).pipe(
      map((responses) => {
        return mapCardsWithWishlist(responses.cards, responses.wishlist);
      })
    )
  }
}
