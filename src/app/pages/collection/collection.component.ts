import { Component } from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {SelectComponent} from "../../shared/components/select/select.component";


@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    ButtonComponent,
    SelectComponent
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent {
  currentPage = 1;
  itemsPerPage = 8;

  get paginatedCards() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.cards.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.cards.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
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
