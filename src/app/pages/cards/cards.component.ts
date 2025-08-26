import {Component, inject} from '@angular/core';
import {CardModalComponent} from "../../components/card-modal/card-modal.component";
import {Router} from "@angular/router";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {SelectComponent} from "../../shared/components/select/select.component";

@Component({
  selector: 'app-cards',
  standalone: true,
    imports: [
        CardModalComponent,
        ButtonComponent,
        SelectComponent
    ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
 private router = inject(Router);

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
    ]

  selectedCard: any = null;

  openCardModal(card: any): void {
    this.selectedCard = card;
  }

  goToCardDetail(card: any): void {
    this.router.navigate(['/cards', card.id]);
  }

  closeModal(): void {
    this.selectedCard = null;
  }
}
