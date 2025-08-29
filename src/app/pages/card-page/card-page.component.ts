import {Component, inject, OnInit} from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {TraderPreviewComponent} from "../../shared/components/trader-preview/trader-preview.component";
import {NewLineToParagraphPipe} from "../../shared/pipes/new-line-to-paragraph.pipe";
import {CardModalComponent} from "../../shared/components/add-card-to-collection-modal/card-modal.component";
import {TraderPreview} from "../../models/trader-preview";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [ButtonComponent, TraderPreviewComponent, NewLineToParagraphPipe, CardModalComponent],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.scss'
})
export class CardPageComponent implements OnInit {

  private readonly router = inject(Router);

  displayedCard!: any;

  card: any = {
    name: "Ambitious Farmhand // Seasoned Cathar",
    isDoubleCard: true,
    doubleCards: [
      {
        name: "Ambitious Farmhand",
        typeLine: "Creature — Human Peasant",
        text: "When this creature enters, you may search your library for a basic Plains card, reveal it, put it into your hand, then shuffle.\nCoven — {1}{W}{W}: Transform this creature. Activate only if you control three or more creatures with different powers.",
        imageSizeNormal: "https://cards.scryfall.io/normal/front/5/4/54d4e7c3-294d-4900-8b70-faafda17cc33.jpg?1634346867",
      },
      {
        name: "Seasoned Cathar",
        typeLine: "Creature — Human Knight",
        text: "Lifelink",
        imageSizeNormal: "https://cards.scryfall.io/normal/back/5/4/54d4e7c3-294d-4900-8b70-faafda17cc33.jpg?1634346867",
      }
    ]
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

  private isFrontFace = true;
  isAddCardModalOpen = false;
  isCardInWishlist = false;

  initDisplayedCard(card: any): void {
    if (card.isDoubleCard) {
      this.isFrontFace = true;
      this.updateDisplayedCard();
    } else {
      this.displayedCard = {
        name: card.name,
        setName: card.setName,
        cardMarketLink: card.cardMarketLink,
        types: card.typeLine,
        text: card.text,
        imageSizeNormal: card.imageSizeNormal
      };
    }
  }

  flipCard(): void {
    if (this.card.isDoubleCard) {
      this.isFrontFace = !this.isFrontFace;
      this.updateDisplayedCard();
    }
  }

  private updateDisplayedCard(): void {
    const card = this.card;
    const face = this.isFrontFace ? card.doubleCards[0] : card.doubleCards[1];
    this.displayedCard = {
      name: card.name,
      setName: card.setName,
      cardMarketLink: card.cardMarketLink,
      types: face.typeLine,
      text: face.text,
      imageSizeNormal: face.imageSizeNormal
    };
  }

  addToWishlist(): void {
    // TODO : appeler un service qui ajoute la carte à la wishlist
    this.isCardInWishlist = true;
    console.log("card added to wishlist", this.card);
  }

  toggleAddCardModal(): void {
    this.isAddCardModalOpen = !this.isAddCardModalOpen;
  }

  clickOnViewTraders(): void {
     void this.router.navigate(["/traders"]);
  }

  ngOnInit(): void {
    this.initDisplayedCard(this.card);
  }

}
