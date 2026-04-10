// cardList (raw from API)
import {Card} from "./card.model";

export interface CardList {
  cards: Card[];
  count: number;
  firstCursor : String;
  nextCursor : String
}
