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
import {WishlistButtonComponent} from "../../shared/components/wishlist-button/wishlist-button.component";
import {mapToDisplayedCard} from "../../shared/mappers/card-mapper";
import {DisplayedCard} from "../../models/card/displayed-card.model";
import {AuthService} from "../../core/services/auth.service";
import {AddWishlistItemService} from "../../core/services/wishlist/add-wishlist-item.service";
import {GetCardsWithWishlistService} from "../../core/services/card/get-cards-with-wishlist.service";
import {DeleteWishlistItemService} from "../../core/services/wishlist/delete-wishlist-item.service";
import { GetFilters } from '../../signals/GetFilters';
import { GetNextAndPreviouspage } from '../../signals/GetNextandPreviousPage';
import { PaginationCursor } from '../../models/PaginationCursor';
import { PaginationPages } from '../../models/PaginationPages';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CardModalComponent,
    ButtonComponent,
    PagerComponent,
    WishlistButtonComponent,
    RouterLink
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  private readonly router = inject(Router);

  private readonly getAllCardsService = inject(GetAllCardsService);
  private readonly getCardsWithWishlistService = inject(GetCardsWithWishlistService);
  private readonly getAllSetsService = inject(GetAllCardsSetsService);
  private readonly getAllCardsTypesService = inject(GetAllCardsTypesService);
  private readonly addWishlistItemService = inject(AddWishlistItemService);
  private readonly deleteWishlistItemService = inject(DeleteWishlistItemService);
  readonly authService = inject(AuthService);
  private signalFilters = inject(GetFilters);
  private signalPagination = inject(GetNextAndPreviouspage)

  filterOn: boolean = false

  // Données
  cards: DisplayedCard[] = [];
  currentPage = 1;
  previousPage = 0;
  totalPages = 10;
  selectedCard: DisplayedCard | null = null;
  types: { label: string; value: string }[] = [];
  sets: ScryfallSet[] = [];
  setOptions: { label: string; value: string }[] = [];

  ngOnInit(): void {
    this.loadSets();
    this.loadTypes();
    this.loadCards();
  }

  // Récupération des cartes
  loadCards(): void {
    const filters = this.signalFilters.getFilters();
    this.currentPage = 1;
    this.previousPage = 0 
    this.signalPagination.resetPaginationCursor();
    this.signalPagination.resetPaginationPages();
    
    
    if(filters.ccm !== "" || filters.color.length > 0 || filters.name !== "" || filters.rarities.length > 0 || filters.set !== "" || filters.type.length > 0
      || filters.standard !== '' || filters.pioneer !== '' || filters.modern !== '' || filters.legacy !== '' || filters.pauper !== '' || filters.vintage !== ''
      || filters.commander !== '' || filters.brawl !== '' || filters.pauperCommander !== '' || filters.duel !== '' || filters.oldSchool !== ''
      || filters.text !== '' || filters.foil == true || filters.textLess == true || filters.fullArt == true 
    ){
      this.filterOn = true
    }

    const getCards = this.authService.isLoggedIn() ? this.getCardsWithWishlistService : this.getAllCardsService;
    
    getCards.execute(filters, this.signalPagination.getPaginationCursor(), this.signalPagination.getPaginationpages()).subscribe({
      next: (res) => {
        this.cards = res.cards.map(card => ({
          ...mapToDisplayedCard(card)
        }));
          this.totalPages = Math.round(res.count/175) >= 1 ? Math.round(res.count/175) : 1
          const index:PaginationCursor ={
            previousCursorFisrtEntry : res.firstCursor.toString(),
            nextCursorFirstEntry :res.nextCursor.toString()    
        }
        this.signalPagination.setPaginationCursor(index)
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

  // Pagination
  onPageChange( pageData:{currentPage: number; previousPage: number} ): void {
    this.currentPage = pageData.currentPage;
    this.previousPage = pageData.previousPage
    const pages : PaginationPages = {
      currentPage : this.currentPage,
      previousPage : this.previousPage
    }
    this.signalPagination.setPaginationPages(pages)
    const filters = this.signalFilters.getFilters(); // CardFilters
    const getCards = this.authService.isLoggedIn() ? this.getCardsWithWishlistService : this.getAllCardsService;
    getCards.execute(filters, this.signalPagination.getPaginationCursor(), this.signalPagination.getPaginationpages()).subscribe({
          next: (res) => {
             this.cards = res.cards.map(card => ({
          ...mapToDisplayedCard(card)
        }));
            const index:PaginationCursor ={
            previousCursorFisrtEntry : res.firstCursor.toString(),
            nextCursorFirstEntry :res.nextCursor.toString()
          }
          this.signalPagination.setPaginationCursor(index)
          },
          error: (err) => console.error('Erreur de chargement des cartes', err)
        });

  }

  openCardModal(card: DisplayedCard): void {
    this.selectedCard = card;
  }

  goToCardDetail(card: DisplayedCard): void {
    this.router.navigate(['/cards', card.id]);
  }

  closeModal(): void {
    this.selectedCard = null;
  }

  onWishlistToggle(cardId: string, isWishlisted: boolean): void {
    const card = this.cards.find(c => c.id === cardId);
    if (card) {
      if (isWishlisted) {
        // If card is in wishlist, remove it
        card.isWishlisted = false;
        this.deleteWishlistItemService.execute(cardId).subscribe();
      }
      if (!isWishlisted) {
        // If card is not in wishlist, add it
        card.isWishlisted = true;
        this.addWishlistItemService.execute(cardId).subscribe();
      }
    }
  }

   clearFilters() {
     const filters = {
          set: '',
          rarities: [],
          color:  [],
          ccm: '',
          name:  '',
          type:  [],
          standard: '',
          pioneer: '',
          modern: '',
          legacy: '',
          pauper: '',
          vintage: '',
          commander: '',
          brawl: '',
          pauperCommander: '',
          duel: '',
          oldSchool: '', 
          text: '',
          foil : false,
          textLess : false,
          fullArt : false
        };
   this.filterOn = false;     
   this.signalFilters.setFilters(filters);
   this.loadCards()
  }
}
