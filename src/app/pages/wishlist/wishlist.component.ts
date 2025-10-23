import {Component, inject, OnInit} from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {SelectComponent} from "../../shared/components/select/select.component";
import {PagerComponent} from "../../shared/components/pager/pager.component";
import {WishlistCard} from "../../models/wishlist/wishlist-card";
import {GetUserWishlistService} from "../../core/services/wishlist/get-user-wishlist.service";
import {WishlistButtonComponent} from "../../shared/components/wishlist-button/wishlist-button.component";
import {DisplayedCard} from "../../models/card/displayed-card.model";
import {Router} from "@angular/router";
import {DeleteWishlistItemService} from "../../core/services/wishlist/delete-wishlist-item.service";

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    SelectComponent,
    PagerComponent,
    ButtonComponent,
    WishlistButtonComponent
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly getUserWishlistService = inject(GetUserWishlistService);
  private readonly deleteWishlistItemService = inject(DeleteWishlistItemService);

  cards!: WishlistCard[];
  currentPage = 1;
  totalPages = 10;

  onPageChange(newPage: number) {
    this.currentPage = newPage;
  }

  onSortChange(value: string) {
    console.log('Selected value:', value);
  }

  removeWishlistItem(card: WishlistCard) {
    this.cards = this.cards.filter(c => c.id != card.id);
    this.deleteWishlistItemService.execute(card.cardId).subscribe();
  }

  goToCardDetail(card: WishlistCard): void {
    this.router.navigate(['/cards', card.cardId]);
  }

  goToCardsPage(): void {
    this.router.navigate(['/cards']);
  }

  ngOnInit() {
    this.getUserWishlistService.execute().subscribe({
      next: response => this.cards = response
    })
  }
}
