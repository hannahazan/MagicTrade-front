import {Component, inject, OnInit} from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {TraderPreviewComponent} from "../../shared/components/trader-preview/trader-preview.component";
import {NewLineToParagraphPipe} from "../../shared/pipes/new-line-to-paragraph.pipe";
import {CardModalComponent} from "../../shared/components/add-card-to-collection-modal/card-modal.component";
import {TraderPreview} from "../../models/trader-preview";
import {Router} from "@angular/router";
import {DisplayedSingleCard, DisplayedDoubleCard} from "../../models/displayed-card";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [ButtonComponent, TraderPreviewComponent, NewLineToParagraphPipe, CardModalComponent],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.scss'
})
export class CardPageComponent implements OnInit {

  private readonly router = inject(Router);
  public readonly authService = inject(AuthService);

  displayedCard!: DisplayedSingleCard | DisplayedDoubleCard;

  isFrontFace = true; // Prop seulement pour les cartes doubles
  isAddCardModalOpen = false;
  isCardInWishlist = false;

  get currentCardFace(): keyof DisplayedDoubleCard['doubleCards'] {
    return this.isFrontFace ? "frontFace" : "backFace";
  }

  // Mappeur à placer dans un service dans le futur
  initDisplayedCard(card: any): void {
    if (card.isDoubleCard) {
      this.displayedCard = {
        name: card.name,
        setName: card.setName,
        cardMarketLink: card.cardMarketLink,
        isDoubleCard: true,
        doubleCards: {
          frontFace: {
            name: card.doubleCards[0].name,
            typeLine: card.doubleCards[0].typeLine,
            text: card.doubleCards[0].text,
            imageUrl: card.doubleCards[0].imageSizeNormal,
          },
          backFace: {
            name: card.doubleCards[1].name,
            typeLine: card.doubleCards[1].typeLine,
            text: card.doubleCards[1].text,
            imageUrl: card.doubleCards[1].imageSizeNormal,
          }
        },
      };
    } else {
      this.displayedCard = {
        name: card.name,
        setName: card.setName,
        cardMarketLink: card.cardMarketLink,
        isDoubleCard: false,
        typeLine: card.typeLine,
        text: card.text,
        imageUrl: card.imageSizeNormal,
      };
    }
  }

  flipCard(): void {
    if (this.card.isDoubleCard) {
      this.isFrontFace = !this.isFrontFace;
    }
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

  // Exemple de single card
  // card: any = {
  //   name: "Ambitious Farmhand",
  //   setName: "Innistrad Remastered",
  //   typeLine: "Creature — Human Peasant",
  //   text: "When this creature enters, you may search your library for a basic Plains card, reveal it, put it into your hand, then shuffle.\nCoven — {1}{W}{W}: Transform this creature. Activate only if you control three or more creatures with different powers.",
  //   imageSizeNormal: "https://cards.scryfall.io/normal/front/5/4/54d4e7c3-294d-4900-8b70-faafda17cc33.jpg?1634346867",
  //   cardMarketLink: "https://www.cardmarket.com/en/Magic/Products?idProduct=574956&referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
  //   isDoubleCard: false,
  //   doubleCards: []
  // }

  // Exemple de double card
  card: any = {
    name: "Ambitious Farmhand // Seasoned Cathar",
    setName: "Innistrad Remastered",
    cardMarketLink: "https://www.cardmarket.com/en/Magic/Products?idProduct=574956&referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
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
}
