import { Component } from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {SelectComponent} from "../../shared/components/select/select.component";
import {PagerComponent} from "../../shared/components/pager/pager.component";


@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    ButtonComponent,
    SelectComponent,
    PagerComponent
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent {
  currentPage = 1;
  totalPages = 10;


  onPageChange(newPage: number) {
    this.currentPage = newPage;
  }

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
