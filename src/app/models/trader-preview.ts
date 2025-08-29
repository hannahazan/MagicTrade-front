import {CardState} from "./card-state";

export interface TraderPreview {
  profilePicture: string,
  pseudo: string,
  rate: string,
  location: string
  ownedCardState?: CardState
}
