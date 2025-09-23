import {Component, inject, input, output} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {SelectComponent} from "../select/select.component";
import {AuthCheckboxComponent} from "../auth-checkbox/auth-checkbox.component";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AddCardToCollectionService} from "../../../core/services/collection/add-card-to-collection.service";
import {UserCard} from "../../../models/user-card/user-card";

@Component({
  selector: 'app-add-card-to-collection-modal',
  standalone: true,
  imports: [
    ButtonComponent,
    SelectComponent,
    AuthCheckboxComponent,
    ReactiveFormsModule
  ],
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.scss'
})
export class CardModalComponent {

  private readonly formBuilder = inject(FormBuilder);
  private readonly addCardToCollectionService = inject(AddCardToCollectionService);

  failedToAddCard = false;
  cardHasBeenAdded = false;

  AddCardToCollectionForm = this.formBuilder.group({
    state: ['', [Validators.required]],
    language: ['', [Validators.required]],
    foil: [false, [Validators.required]],
    fullArt: [false, [Validators.required]],
    textless: [false, [Validators.required]]
  })

  cardId = input.required<string>();
  closeModal = output<void>();
  addToCollection = output<any>();

  onStateChange(evt: string): void {
    this.AddCardToCollectionForm.controls['state'].setValue(evt);
  }

  onLanguageChange(evt: string): void {
    this.AddCardToCollectionForm.controls['language'].setValue(evt);
  }

  onSubmit(): void {
    const formValues = this.AddCardToCollectionForm.getRawValue();
    const userCard: UserCard = {
      userId: 13,
      cardId: this.cardId(),
      state: formValues.state!,
      lang: formValues.language!
    }

    this.addCardToCollectionService.execute([userCard]).subscribe({
      next: () => {
        this.failedToAddCard = false;
        this.cardHasBeenAdded = true;
        this.addToCollection.emit(this.cardId);
      },
      error: error => {
        this.cardHasBeenAdded = false;
        this.failedToAddCard = true;
      }
    });
  }
}
