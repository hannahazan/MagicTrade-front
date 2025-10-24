import { CARD_STATES } from "../core/constants/card-states";

export type CardState = keyof typeof CARD_STATES;

export interface TraderPreview {
  profilePicture: string;
  pseudo: string;
  rate: string;
  location: string;
  ownedCardState?: CardState;
}
