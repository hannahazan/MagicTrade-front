import {DisplayedCard, DisplayedCardFace} from "../../models/card/displayed-card.model";
import {Card} from "../../models/card/card.model";

function mapFace(doubleCard: {
  name: string | null;
  typeLine: string | null;
  text: string | null;
  imageSizeNormal: string | null;
}, card :  Card): DisplayedCardFace {
  if(card.imageSizeNormal !== null){
    return {
      name: doubleCard.name,
      typeLine: doubleCard.typeLine,
      text: doubleCard.text,
      imageUrl: card.imageSizeNormal,
    }
  }
  else
  return {
    name: doubleCard.name,
    typeLine: doubleCard.typeLine,
    text: doubleCard.text,
    imageUrl: doubleCard.imageSizeNormal,
  };
}

export function mapToDisplayedCard(card: Card): DisplayedCard {
  if (card.isDoubleCard) {
    return {
      id: card.id,
      name: card.name,
      setName: null,
      cardMarketPrice: card.cardMarketPrice,
      isDoubleCard: card.isDoubleCard,
      faces: [
        mapFace(card.doubleCards[0], card),
        mapFace(card.doubleCards[1], card),
      ],
      isWishlisted: card.isWishlisted ?? undefined
    };
  } else {
    return {
      id: card.id,
      name: card.name,
      setName: null,
      cardMarketPrice: card.cardMarketPrice,
      isDoubleCard: false,
      faces: [
        {
          name: card.name,
          typeLine: card.types,
          text: card.text,
          imageUrl: card.imageSizeNormal,
        },
      ],
      isWishlisted: card.isWishlisted ?? undefined
    };
  }


}
