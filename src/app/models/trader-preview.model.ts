import { CARD_STATES } from "../core/constants/card-states";

export type CardState = keyof typeof CARD_STATES;

export interface TraderPreview {
  id: number;
  pseudo: string;
  city: string;
  country: string;
  department: string;
  collectionCount: number;
  cardState? : string;
  profilePicture?: string;
  rate?: string;
}
