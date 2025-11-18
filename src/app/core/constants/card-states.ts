export interface CardStateInfo {
  label: string;   // Nom complet (ex: "Near Mint")
  code: string;    // Code abrégé (ex: "NM")
  cssClass: string; // Classe CSS (ex: "states--near-mint")
}

export const CARD_STATES: Record<string, CardStateInfo> = {
  M:  { label: 'Mint',          code: 'M',  cssClass: 'states--mint' },
  NM: { label: 'Near Mint',     code: 'NM', cssClass: 'states--near-mint' },
  EX: { label: 'Excellent',     code: 'EX', cssClass: 'states--excellent' },
  GD: { label: 'Good',          code: 'GD', cssClass: 'states--good' },
  LP: { label: 'Light Played',  code: 'LP', cssClass: 'states--light-played' },
  PL: { label: 'Played',        code: 'PL', cssClass: 'states--played' },
  PO: { label: 'Poor',          code: 'PO', cssClass: 'states--poor' },
};
