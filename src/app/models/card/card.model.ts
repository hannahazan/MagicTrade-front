// Card (raw from API)
export interface Card {
  id: string;
  setId: string | null;
  name: string | null;
  manaCost: string | null;
  cmc: number | null;
  types: string | null;
  text: string | null;
  toughness: string | null;
  power: string | null;
  rarity: string | null;
  foil: boolean | null;
  fullArt: boolean | null;
  textLess: boolean | null;
  cardMarketPrice: string | null;
  standard: string | null;
  pioneer: string | null;
  explorer: string | null;
  modern: string | null;
  legacy: string | null;
  pauper: string | null;
  vintage: string | null;
  commander: string | null;
  brawl: string | null;
  pauperCommander: string | null;
  duel: string | null;
  oldSchool: string | null;
  imageSizeNormal: string | null;
  imageSizeArtCrop: string | null;
  isDoubleCard: boolean | null;
  doubleCards: DoubleCard[];
}

// DoubleCard (raw from API)
export interface DoubleCard {
  id: number;
  cardId: string;
  name: string | null;
  manaCost: string | null;
  typeLine: string | null;
  text: string | null;
  power: string | null;
  toughness: string | null;
  imageSizeNormal: string | null;
  imageSizeArtCrop: string | null;
}
