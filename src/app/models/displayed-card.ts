export interface DisplayedSingleCard {
  name: string,
  setName: string,
  typeLine: string,
  text: string,
  imageUrl: string,
  cardMarketLink: string,
  isDoubleCard: false,
}

export interface DisplayedDoubleCard {
  name: string;
  setName: string;
  cardMarketLink: string,
  isDoubleCard: true,
  doubleCards: {
    frontFace: DoubleCardFace;
    backFace: DoubleCardFace;
  };
}

interface DoubleCardFace {
  name: string,
  typeLine: string,
  text: string,
  imageUrl: string,
}


