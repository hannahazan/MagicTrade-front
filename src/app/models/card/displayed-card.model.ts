export interface DisplayedCardFace {
  name: string | null;
  typeLine: string | null;
  text: string | null;
  imageUrl: string | null;
}

export interface DisplayedCard {
  name: string | null;
  setName: string | null;
  cardMarketPrice: string | null;
  isDoubleCard: boolean;
  faces: DisplayedCardFace[];
}
