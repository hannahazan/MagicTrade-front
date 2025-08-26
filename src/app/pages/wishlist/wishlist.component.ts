import { Component } from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {SelectComponent} from "../../shared/components/select/select.component";

@Component({
  selector: 'app-wishlist',
  standalone: true,
    imports: [
        ButtonComponent,
        SelectComponent
    ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  onSortChange(value: string) {
    console.log('Selected value:', value);
  }

  cards = [
    {
      image: 'cardMagic.png',
      state: 'Mint',
      language: 'English',
      foil: 'Yes',
      fullArt: 'Yes',
      textless: 'No',
      price: 'See on Cardmarket'
    },
    {
      image: 'cardMagic.png',
      state: 'Mint',
      language: 'English',
      foil: 'Yes',
      fullArt: 'Yes',
      textless: 'No',
      price: 'See on Cardmarket'
    },
    {
      image: 'cardMagic.png',
      state: 'Mint',
      language: 'English',
      foil: 'Yes',
      fullArt: 'Yes',
      textless: 'No',
      price: 'See on Cardmarket'
    },
    {
      image: 'cardMagic.png',
      state: 'Mint',
      language: 'English',
      foil: 'Yes',
      fullArt: 'Yes',
      textless: 'No',
      price: 'See on Cardmarket'
    },
    {
      image: 'cardMagic.png',
      state: 'Mint',
      language: 'English',
      foil: 'Yes',
      fullArt: 'Yes',
      textless: 'No',
      price: 'See on Cardmarket'
    },
    {
      image: 'cardMagic.png',
      state: 'Mint',
      language: 'English',
      foil: 'Yes',
      fullArt: 'Yes',
      textless: 'No',
      price: 'See on Cardmarket'
    },
    {
      image: 'cardMagic.png',
      state: 'Mint',
      language: 'English',
      foil: 'Yes',
      fullArt: 'Yes',
      textless: 'No',
      price: 'See on Cardmarket'
    },
    {
      image: 'cardMagic.png',
      state: 'Mint',
      language: 'English',
      foil: 'Yes',
      fullArt: 'Yes',
      textless: 'No',
      price: 'See on Cardmarket'
    },
    {
      image: 'cardMagic.png',
      state: 'Mint',
      language: 'English',
      foil: 'Yes',
      fullArt: 'Yes',
      textless: 'No',
      price: 'See on Cardmarket'
    },
    {
      image: 'cardMagic.png',
      state: 'Mint',
      language: 'English',
      foil: 'Yes',
      fullArt: 'Yes',
      textless: 'No',
      price: 'See on Cardmarket'
    },
    {
      image: 'cardMagic.png',
      state: 'Mint',
      language: 'English',
      foil: 'Yes',
      fullArt: 'Yes',
      textless: 'No',
      price: 'See on Cardmarket'
    },
  ];
}
