import {Component, inject, OnInit} from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {TraderPreviewComponent} from "../../shared/components/trader-preview/trader-preview.component";
import {NewLineToParagraphPipe} from "../../shared/pipes/new-line-to-paragraph.pipe";
import {CardModalComponent} from "../../shared/components/add-card-to-collection-modal/card-modal.component";
import {TraderPreview} from "../../models/trader-preview.model";
import {ActivatedRoute, Router} from "@angular/router";
import {
  DisplayedCard,
  DisplayedCardFace
} from "../../models/card/displayed-card.model";
import {AuthService} from "../../core/services/auth.service";
import {GetOneCardService} from "../../core/services/card/get-one-card.service";
import {Card} from "../../models/card/card.model";

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [ButtonComponent, TraderPreviewComponent, NewLineToParagraphPipe, CardModalComponent],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.scss'
})
export class CardPageComponent implements OnInit {

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly getOneCardService = inject(GetOneCardService);
  public readonly authService = inject(AuthService);

  displayedCard!: DisplayedCard;

  isFrontFace = true; // Prop seulement pour les cartes doubles
  isAddCardModalOpen = false;
  isCardInWishlist = false;

  get currentCardFace(): DisplayedCardFace {
    return this.displayedCard.faces[this.isFrontFace? 0 : 1];
  }

  // Mappeur à placer dans un service dans le futur
  mapToDisplayedCard(card: Card): void {
    if (card.isDoubleCard) {
      this.displayedCard = {
        name: card.name,
        setName: null,
        cardMarketPrice: card.cardMarketPrice,
        isDoubleCard: true,
        faces: [
          {
            name: card.doubleCards[0].name,
            typeLine: card.doubleCards[0].typeLine,
            text: card.doubleCards[0].text,
            imageUrl: card.doubleCards[0].imageSizeNormal,
          },
          {
            name: card.doubleCards[1].name,
            typeLine: card.doubleCards[1].typeLine,
            text: card.doubleCards[1].text,
            imageUrl: card.doubleCards[1].imageSizeNormal,
          },
        ],
      };
    } else {
      this.displayedCard = {
        name: card.name,
        setName: null,
        cardMarketPrice: card.cardMarketPrice,
        isDoubleCard: false,
        faces: [
          {
            name: card.name,
            typeLine: card.types,
            text: card.text,
            imageUrl: card.imageSizeNormal,
          },
        ],
      };
    }
  }

  flipCard(): void {
    if (this.displayedCard.isDoubleCard) {
      this.isFrontFace = !this.isFrontFace;
    }
  }

  addToWishlist(): void {
    // TODO : appeler un service qui ajoute la carte à la wishlist
    this.isCardInWishlist = true;
    console.log("card added to wishlist", this.displayedCard);
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
        this.getOneCardService.execute(cardId).subscribe({
          next: result => {
            if (result.cards.length === 0) {
              this.router.navigate(["/not-found"]);
            } else {
              this.mapToDisplayedCard(result.cards[0]);
            }
          },
          error: error => console.log(error),
        })
      }
    })
  }

  owners: TraderPreview[] = [
    {
      profilePicture: "dragon.png",
      pseudo: "JOHN WICK",
      rate: "4,8",
      location: "Auvergne-Rhône-Alpes",
      ownedCardState: "mint"
    },
    {
      profilePicture: "dragon.png",
      pseudo: "JOHN WICK",
      rate: "4,8",
      location: "Auvergne-Rhône-Alpes",
      ownedCardState: "near-mint"
    },
    {
      profilePicture: "dragon.png",
      pseudo: "JOHN WICK",
      rate: "4,8",
      location: "Auvergne-Rhône-Alpes",
      ownedCardState: "poor"
    },
    {
      profilePicture: "dragon.png",
      pseudo: "JOHN WICK",
      rate: "4,8",
      location: "Auvergne-Rhône-Alpes",
      ownedCardState: "light-played"
    },
    {
      profilePicture: "dragon.png",
      pseudo: "JOHN WICK",
      rate: "4,8",
      location: "Auvergne-Rhône-Alpes",
      ownedCardState: "excellent"
    }
  ]
}
