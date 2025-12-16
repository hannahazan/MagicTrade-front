export interface CardStateInfo {
  label: string;   // Nom complet (ex: "Near Mint")
  code: string;    // Code abrégé (ex: "NM")
  cssClass: string; // Classe CSS (ex: "states--near-mint")
}

export const CARD_STATES: Record<string, CardStateInfo> = {
  M:  { label: 'Mint',          code: 'M',  cssClass: 'states--M' },
  NM: { label: 'Near Mint',     code: 'NM', cssClass: 'states--NM' },
  EX: { label: 'Excellent',     code: 'EX', cssClass: 'states--EX' },
  GD: { label: 'Good',          code: 'GD', cssClass: 'states--GD' },
  LP: { label: 'Light Played',  code: 'LP', cssClass: 'states--LP' },
  PL: { label: 'Played',        code: 'PL', cssClass: 'states--PL' },
  PO: { label: 'Poor',          code: 'PO', cssClass: 'states--PO' },
};
