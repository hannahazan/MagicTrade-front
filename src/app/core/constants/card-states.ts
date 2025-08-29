import {CardState} from "../../models/card-state";

export const CARD_STATES: Record<CardState, string> = {
  "mint": "M",
  "near-mint": "NM",
  "excellent": "EX",
  "good": "GD",
  "light-played": "LP",
  "played": "PL",
  "poor": "PO"
};
