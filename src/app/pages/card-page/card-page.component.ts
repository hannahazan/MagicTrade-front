import {Component, inject, OnInit} from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {NewLineToParagraphPipe} from "../../shared/pipes/new-line-to-paragraph.pipe";
import {CardModalComponent} from "../../shared/components/add-card-to-collection-modal/card-modal.component";
import {ActivatedRoute, Router} from "@angular/router";
import {
  DisplayedCard,
  DisplayedCardFace
} from "../../models/card/displayed-card.model";
import {AuthService} from "../../core/services/auth.service";
import {GetOneCardService} from "../../core/services/card/get-one-card.service";
import {mapToDisplayedCard} from "../../shared/mappers/card-mapper";
import {WishlistButtonComponent} from "../../shared/components/wishlist-button/wishlist-button.component";
import {GetOneCardWithWishlistService} from "../../core/services/card/get-one-card-with-wishlist.service";
import {AddWishlistItemService} from "../../core/services/wishlist/add-wishlist-item.service";
import {DeleteWishlistItemService} from "../../core/services/wishlist/delete-wishlist-item.service";

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [ButtonComponent, NewLineToParagraphPipe, CardModalComponent, WishlistButtonComponent],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.scss'
})
export class CardPageComponent implements OnInit {

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly getOneCardService = inject(GetOneCardService);
  private readonly getOneCardWithWishlistService = inject(GetOneCardWithWishlistService);
  private readonly addWishlistItemService = inject(AddWishlistItemService);
  private readonly deleteWishlistItemService = inject(DeleteWishlistItemService);
  readonly authService = inject(AuthService);

  displayedCard!: DisplayedCard;

  isFrontFace = true; // Prop seulement pour les cartes doubles
  isAddCardModalOpen = false;

  get currentCardFace(): DisplayedCardFace {
    return this.displayedCard.faces[this.isFrontFace? 0 : 1];
  }

  flipCard(): void {
    if (this.displayedCard.isDoubleCard) {
      this.isFrontFace = !this.isFrontFace;
    }
  }

  toggleAddCardModal(): void {
    this.isAddCardModalOpen = !this.isAddCardModalOpen;
  }

  clickOnViewTraders(): void {
     void this.router.navigate(["/traders"]);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const cardId = params.get('cardId');
      if (cardId) {
        const getOneCard = this.authService.isLoggedIn() ? this.getOneCardWithWishlistService : this.getOneCardService;
        getOneCard.execute(cardId).subscribe({
          next: result => {
            if (result.cards.length === 0) {
              this.router.navigate(["/not-found"]);
            } else {
              this.displayedCard = mapToDisplayedCard(result.cards[0])
            }
          },
          error: error => console.log(error),
        })
      }
    })
  }

  onWishlistToggle(isWishlisted: boolean): void {
    this.displayedCard.isWishlisted = !isWishlisted;
    if (isWishlisted) {
      // If card is in wishlist, remove it
      this.displayedCard.isWishlisted = false;
      this.deleteWishlistItemService.execute(this.displayedCard.id).subscribe();
    }
    if (!isWishlisted) {
      // If card is not in wishlist, add it
      this.displayedCard.isWishlisted = true;
      this.addWishlistItemService.execute(this.displayedCard.id).subscribe();
    }
  }
}
