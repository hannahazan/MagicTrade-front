import {Component, inject, OnInit} from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {SelectComponent} from "../../shared/components/select/select.component";
import {PagerComponent} from "../../shared/components/pager/pager.component";
import {WishlistCard} from "../../models/wishlist/wishlist-card";
import {GetUserWishlistService} from "../../core/services/wishlist/get-user-wishlist.service";

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    SelectComponent,
    PagerComponent,
    ButtonComponent
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  private readonly getUserWishlistService = inject(GetUserWishlistService);

  cards!: WishlistCard[];
  currentPage = 1;
  totalPages = 10;

  onPageChange(newPage: number) {
    this.currentPage = newPage;
  }

  onSortChange(value: string) {
    console.log('Selected value:', value);
  }

  ngOnInit() {
    this.getUserWishlistService.execute().subscribe({
      next: response => this.cards = response
    })
  }
}
