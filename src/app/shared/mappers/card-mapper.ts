import {DisplayedCard, DisplayedCardFace} from "../../models/card/displayed-card.model";
import {Card} from "../../models/card/card.model";

function mapFace(card: {
  name: string | null;
  typeLine: string | null;
  text: string | null;
  imageSizeNormal: string | null;
}): DisplayedCardFace {
  return {
    name: card.name,
    typeLine: card.typeLine,
    text: card.text,
    imageUrl: card.imageSizeNormal,
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
        mapFace(card.doubleCards[0]),
        mapFace(card.doubleCards[1]),
      ]
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
    };
  }


}
