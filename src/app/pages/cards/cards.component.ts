import {Component, inject, OnInit} from '@angular/core';
import {CardModalComponent} from "../../shared/components/add-card-to-collection-modal/card-modal.component";
import {Router, RouterLink} from "@angular/router";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {SelectComponent} from "../../shared/components/select/select.component";
import {PagerComponent} from "../../shared/components/pager/pager.component";
import {Card} from "../../models/card/card.model";
import {GetAllCardsService} from "../../core/services/card/get-all-cards.service";
import {GetAllCardsSetsService} from "../../core/services/card/get-all-cards-sets.service";
import {GetAllCardsTypesService} from "../../core/services/card/get-all-cards-types.service";
import {ScryfallSet} from "../../models/card/card-set.model";

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
  private readonly router = inject(Router);
  private readonly getAllCardsService = inject(GetAllCardsService);
  private readonly getAllSetsService = inject(GetAllCardsSetsService);
  private readonly getAllCardsTypesService = inject(GetAllCardsTypesService);

  // Données
  cards: Card[] = [];
  currentPage = 1;
  totalPages = 10;
  selectedCard: Card | null = null;
  types: { label: string; value: string }[] = [];
  sets: ScryfallSet[] = [];
  setOptions: { label: string; value: string }[] = [];

  filters = {
    set: '',
    type: '',
    rarity: '',
    color: '',
    ccm: ''
  };

  // colorOptions = [
  //   { label: 'White', value: 'White' },
  //   { label: 'Blue', value: 'Blue' },
  //   { label: 'Black', value: 'Black' },
  //   { label: 'Red', value: 'Red' },
  //   { label: 'Green', value: 'Green' },
  //   { label: 'Colorless', value: 'Colorless' }
  // ];

  ngOnInit(): void {
    this.loadSets();
    this.loadTypes();
    this.loadCards();
  }

  // Récupération des cartes
  loadCards(): void {
    this.getAllCardsService.execute(this.filters).subscribe({
      next: (res) => {
        this.cards = res.cards;
      },
      error: (err) => console.error('Erreur de chargement des cartes', err)
    });
  }

  // Récupération des sets
  loadSets(): void {
    this.getAllSetsService.execute().subscribe({
      next: (sets: ScryfallSet[]) => {
        this.sets = sets;
        this.setOptions = sets.map((s) => ({
          label: s.name,
          value: s.id
        }));
      },
      error: (err) => console.error('Erreur de chargement des sets', err)
    });
  }

  loadTypes(): void {
    this.getAllCardsTypesService.execute().subscribe({
      next: (res) => {
        // types.filters est un string[]
        this.types = res.filters.map(t => ({ label: t, value: t }));
      },
      error: (err) => console.error('Erreur lors du chargement des types', err)
    });
  }

  // Application des filtres
  applyFilters(): void {
    console.log('Filtres actifs :', this.filters);
    this.loadCards();
  }

  // Gestion des changements dans les selects
  onSetFilterChange(value: string): void {
    this.filters.set = value;
    this.applyFilters();
  }

  onRarityChange(value: string): void {
    this.filters.rarity = value;
    this.applyFilters();
  }

  onColorChange(value: string) {
    this.filters.color = value;
    this.applyFilters();
  }

  onTypeChange(value: string): void {
    this.filters.type = value;
    this.applyFilters();
  }

  onCcmChange(value: string): void {
    this.filters.ccm = value;
    this.applyFilters();
  }

  // Pagination
  onPageChange(newPage: number): void {
    this.currentPage = newPage;
  }

  onSortChange(value: string) {
    console.log('Selected value:', value);
  }

  openCardModal(card: Card): void {
    this.selectedCard = card;
  }

  goToCardDetail(card: Card): void {
    this.router.navigate(['/cards', card.id]);
  }

  closeModal(): void {
    this.selectedCard = null;
  }
}
