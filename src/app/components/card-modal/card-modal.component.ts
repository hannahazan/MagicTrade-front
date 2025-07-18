import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";

@Component({
  selector: 'app-card-modal',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.scss'
})
export class CardModalComponent {

@Input() card: any;
@Output() close = new EventEmitter<void>();
@Output() addToCollection = new EventEmitter<any>();

  onAdd(): void {
    this.addToCollection.emit(this.card);
    this.close.emit();
  }
}
