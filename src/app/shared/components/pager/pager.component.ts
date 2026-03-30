import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { DisplayedCard } from '../../../models/card/displayed-card.model';
import { Scroller } from '../../utils/Scroller';

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.scss'
})
export class PagerComponent {
  readonly authService = inject(AuthService);
  private scroller = inject(Scroller);

  @Input() currentPage = 1;
  @Input() previousPage = 0
  @Input() totalPages = 1;
  @Output() pageChange = new EventEmitter<{currentPage :number, previousPage :number}>();

  cards: DisplayedCard[] = [];

  prevPage() {
    if(this.currentPage > 1) {
      this.scroller.scrollToTop();
      this.pageChange.emit({currentPage : this.currentPage - 1, previousPage : this.currentPage});
    }
  }

  nextPage() {
    if(this.currentPage < this.totalPages) {
      this.scroller.scrollToTop();
      this.pageChange.emit({currentPage : this.currentPage + 1, previousPage : this.currentPage});
    }
  }
}
