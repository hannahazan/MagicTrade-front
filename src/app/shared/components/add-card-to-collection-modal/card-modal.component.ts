import {Component, inject, input, output} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {SelectComponent} from "../select/select.component";
import {AuthCheckboxComponent} from "../auth-checkbox/auth-checkbox.component";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";

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

  failedToAddCard = false;

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
    console.log(evt);
    this.AddCardToCollectionForm.controls['state'].setValue(evt);
  }

  onLanguageChange(evt: string): void {
    console.log(evt);
    this.AddCardToCollectionForm.controls['language'].setValue(evt);
  }

  onSubmit(): void {
    this.addToCollection.emit(this.cardId);
    // this.closeModal.emit();
    console.log(this.AddCardToCollectionForm.getRawValue());
  }
}
