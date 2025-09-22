import {Component, inject, OnInit} from '@angular/core';
import {CardModalComponent} from "../../shared/components/add-card-to-collection-modal/card-modal.component";
import {Router, RouterLink} from "@angular/router";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {SelectComponent} from "../../shared/components/select/select.component";
import {PagerComponent} from "../../shared/components/pager/pager.component";
import {Card} from "../../models/card.model";
import {CardService} from "../../core/services/cards.service";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CardModalComponent,
    ButtonComponent,
    SelectComponent,
    PagerComponent,
    RouterLink
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  private router = inject(Router);
  constructor(private cardService: CardService) {}

  cards: Card[] = [];
  currentPage = 1;
  totalPages = 10;
  selectedCard: Card | null = null;

  ngOnInit(): void {
    this.cardService.getCards().subscribe({
      next: (res) => {
        this.cards = res.cards;
      },
      error: (err) => console.error('Erreur de chargement des cartes', err)
    });
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
  }

  onSortChange(value: string) {
    console.log('Selected value:', value);
  }

  openCardModal(card: Card): void {
    this.selectedCard = card;
  }

  goToCardDetail(card: any): void {
    this.router.navigate(['/cards', card.id]);
  }

  closeModal(): void {
    this.selectedCard = null;
  }
}
