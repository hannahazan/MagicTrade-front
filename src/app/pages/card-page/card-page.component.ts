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
import {TraderPreviewComponent} from "../../shared/components/trader-preview/trader-preview.component";
import {TraderPreview} from "../../models/trader-preview.model";
import {TraderService} from "../../core/services/trader/trader.service";

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [ButtonComponent, NewLineToParagraphPipe, CardModalComponent, WishlistButtonComponent, TraderPreviewComponent],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.scss'
})
export class CardPageComponent implements OnInit {

  constructor(private traderService: TraderService) {}
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly getOneCardService = inject(GetOneCardService);
  private readonly getOneCardWithWishlistService = inject(GetOneCardWithWishlistService);
  private readonly addWishlistItemService = inject(AddWishlistItemService);
  private readonly deleteWishlistItemService = inject(DeleteWishlistItemService);
  readonly authService = inject(AuthService);

  displayedCard!: DisplayedCard;
  traders: TraderPreview[] = []

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

  clickOnViewTraders(cardId: String): void {
     void this.router.navigate(['/traders', cardId]);
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
    this.loadCardOwner()
  }

  loadCardOwner(): void{
    this.route.paramMap.subscribe(params => {
      const cardId = params.get('cardId');
      if (cardId) {
        const getOwnersCard = this.traderService.getCardOwners(cardId);
        getOwnersCard.subscribe({
          next: (data) => {
            console.log(data.collectionUsers)
            this.traders = data.collectionUsers.map(owner => ({
              id: owner.userId,
              pseudo: owner.pseudo,
              city: owner.city,
              country: owner.country,
              department: owner.department,
              collectionCount:0,
              cardState: owner.state,
              profilePicture: 'dragon.png',
              rate: (Math.random() * 2 + 3).toFixed(1), // note entre 3.0 et 5.0
            }));

            //this.isLoading = false;
          }
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
