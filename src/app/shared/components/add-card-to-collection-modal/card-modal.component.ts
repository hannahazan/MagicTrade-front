import {Component, input, output} from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-add-card-to-collection-modal',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.scss'
})
export class CardModalComponent {

  cardId = input.required<string>();
  closeModal = output<void>();
  addToCollection = output<any>();

  onAdd(): void {
    this.addToCollection.emit(this.cardId);
    this.closeModal.emit();
  }
}
