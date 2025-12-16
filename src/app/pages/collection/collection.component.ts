import {Component, inject, OnInit} from '@angular/core';
import { PagerComponent } from '../../shared/components/pager/pager.component';
import { AddCardToCollectionService } from "../../core/services/collection/add-card-to-collection.service";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {CollectionCard} from "../../models/collection-card";
import {Router} from "@angular/router";
import {StatesComponent} from "../../shared/components/states/states.component";

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [PagerComponent, ButtonComponent, StatesComponent],
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  private readonly collectionService = inject(AddCardToCollectionService);
  private readonly router = inject(Router);

  collections: CollectionCard[] = [];
  paginatedCollections: CollectionCard[] = [];

  currentPage = 1;
  itemsPerPage = 8;
  totalPages = 1;

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.updatePagination();
  }

  ngOnInit(): void {
    this.loadCollection();
  }

  goToCardDetail(collection: CollectionCard): void {
    this.router.navigate(['/cards', collection.cardId]);
  }

  loadCollection(): void {
    this.collectionService.getUserCollection().subscribe({
      next: (data) => {
        this.collections = data;
        this.totalPages = Math.ceil(this.collections.length / this.itemsPerPage);
        this.updatePagination();
      },
      error: (err) => console.error(err)
    });
  }

  getCardImage(collection: CollectionCard): string {
    if (collection.isDoubleCard && collection.doubleCards?.length) {
      return collection.doubleCards[0].imageSizeNormal ?? 'assets/images/fallback.jpg';
    }
    return collection.imageUrl ?? 'assets/images/fallback.jpg';
  }

  updatePagination(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedCollections = this.collections.slice(start, end);
  }

  deleteItem(collectionId: number | null): void {
    if (!collectionId) return;
    this.collectionService.deleteFromCollection(collectionId).subscribe({
      next: () => {
        this.collections = this.collections.filter(c => c.id !== collectionId);
        this.totalPages = Math.ceil(this.collections.length / this.itemsPerPage);
        this.updatePagination();
      },
      error: (err) => console.error(err)
    });
  }

  goToCards(): void {
    this.router.navigate(['/cards']);
  }
}
