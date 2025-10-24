export interface CollectionDoubleCard {
  id: number;
  cardId: string;
  imageSizeNormal: string;
}

export interface CollectionCard {
  id: number | null;
  userId?: number | null;
  cardId: string;
  lang: string;
  state: string;
  imageUrl?: '';
  isDoubleCard?: boolean;
  doubleCards?: CollectionDoubleCard[];
}
