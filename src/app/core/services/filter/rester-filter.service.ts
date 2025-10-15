import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class FiltersService {
  getDefaultFilters() {
    return {
      cardName: '',
      typeLine: '',
      colors: {
        white: false,
        blue: false,
        black: false,
        red: false,
        green: false,
        colorless: false
      },
      manaCost: '',
      set: ''
    };
  }
}
