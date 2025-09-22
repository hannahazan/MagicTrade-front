import {CardState} from "./card-state.model";

export interface TraderPreview {
  profilePicture: string,
  pseudo: string,
  rate: string,
  location: string
  ownedCardState?: CardState
}
