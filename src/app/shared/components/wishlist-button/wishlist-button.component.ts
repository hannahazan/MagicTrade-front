import {Component, EventEmitter, Input, input, Output} from '@angular/core';

@Component({
  selector: 'app-wishlist-button',
  standalone: true,
  imports: [],
  templateUrl: './wishlist-button.component.html',
  styleUrl: './wishlist-button.component.scss'
})
export class WishlistButtonComponent {
  @Input() isWishlisted? : boolean = false;

  @Output() wishlistToggled = new EventEmitter<boolean>();

  onToggle(): void {
    // this.isWishlisted = !this.isWishlisted;
    this.wishlistToggled.emit(this.isWishlisted);
  }
}
