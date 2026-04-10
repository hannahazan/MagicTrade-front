import {inject, Injectable} from '@angular/core';
import {GetAllCardsService} from "./get-all-cards.service";
import {GetUserWishlistService} from "../wishlist/get-user-wishlist.service";
import {DisplayedCard} from "../../../models/card/displayed-card.model";
import {Card} from "../../../models/card/card.model";
import {filter, forkJoin, map, Observable} from "rxjs";
import {mapCardsWithWishlist} from "../../../shared/mappers/cards-with-wishlist.mapper";
import {CardList} from "../../../models/card/cardList.model";
import { CardFilters } from '../../../models/CardFilters';
import { GetNextAndPreviouspage } from '../../../signals/GetNextandPreviousPage';

// Get cards list with wishlist additional property
@Injectable({
  providedIn: 'root'
})
export class GetCardsWithWishlistService {
  private readonly getAllCards = inject(GetAllCardsService);
  private readonly getUserWishlist = inject(GetUserWishlistService);
  private readonly signalPagination = inject(GetNextAndPreviouspage)

  execute(filters: CardFilters): Observable<CardList> {
    return forkJoin({
      cards: this.getAllCards.execute(filters, this.signalPagination.getPaginationCursor(), this.signalPagination.getPaginationpages()),
      wishlist: this.getUserWishlist.execute()
    }).pipe(
      map((responses) => {
        return mapCardsWithWishlist(responses.cards, responses.wishlist);
      })
    )
  }
}
