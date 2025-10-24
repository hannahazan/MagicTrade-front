export interface WishlistCard {
  id: number,
  userId: number,
  cardId: string,
  imageSizeNormal: string,
  isDoubleCard: boolean,
  doubleCards: WishlistDoubleCard[]
}

interface WishlistDoubleCard {
  id: number,
  cardId: string,
  imageSizeNormal: string
}
