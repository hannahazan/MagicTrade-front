import {WishlistCard} from "../../models/wishlist/wishlist-card";
import {Card} from "../../models/card/card.model";
import {CardList} from "../../models/card/cardList.model";

export function mapCardsWithWishlist(cardList: CardList, wishlist: WishlistCard[]): CardList {
  const wishlistIds = new Set(wishlist.map(w => w.cardId));
  return {
    cards: cardList.cards.map(card => ({
        ...card,
        isWishlisted: wishlistIds.has(card.id)
      }))
  }
}
