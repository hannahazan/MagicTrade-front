import {Component} from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {TraderPreviewComponent} from "../../components/trader-preview/trader-preview.component";
import {NewLineToParagraphPipe} from "../../shared/pipes/new-line-to-paragraph.pipe";
import {NgOptimizedImage} from "@angular/common";
import {CardModalComponent} from "../../shared/components/add-card-to-collection-modal/card-modal.component";

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [ButtonComponent, TraderPreviewComponent, NewLineToParagraphPipe, CardModalComponent],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.scss'
})
export class CardPageComponent {

  card: any = {
    imageSizeNormal: "cardMagic.png",
    title: "Unite the Coalition",
    types: "Instant",
    text: "Choose five. You may choose the same mode more than once.\n• Target permanent phases out.\n• Target player draws a card.\n• Exile target player's graveyard.\n• Unite the Coalition deals 2 damage to any target.\n• Destroy target artifact or enchantment.",
    setName: "Dominaria United Commander",
    price: "O,89 €"
  }

  isAddCardModalOpen = false;
  isCardInWishlist = false;

  addToWishlist(): void {
    // TODO : appeler un service qui ajoute la carte à la wishlist
    this.isCardInWishlist = true;
    console.log("card added to wishlist", this.card);
  }

  toggleAddCardModal(): void {
    this.isAddCardModalOpen = !this.isAddCardModalOpen;
  }

}
