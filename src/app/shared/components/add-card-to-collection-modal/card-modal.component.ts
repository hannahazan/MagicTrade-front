import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { SelectComponent } from "../select/select.component";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AddCardToCollectionService } from "../../../core/services/collection/add-card-to-collection.service";
import { CollectionCard } from "../../../models/collection-card";
import { AuthService } from "../../../core/services/auth.service";
import { Router } from "@angular/router";
import { CARD_STATES } from "../../../core/constants/card-states";
import { CARD_LANGUAGES } from "../../../core/constants/card-languages";

@Component({
  selector: 'app-add-card-to-collection-modal',
  standalone: true,
  imports: [
    ButtonComponent,
    SelectComponent,
    ReactiveFormsModule
  ],
  templateUrl: './card-modal.component.html',
  styleUrl: './card-modal.component.scss'
})
export class CardModalComponent {
  @Input() cardId!: string;
  @Output() closeModal = new EventEmitter<void>();
  @Output() addToCollection = new EventEmitter<string>();

  private readonly formBuilder = inject(FormBuilder);
  private readonly addCardToCollectionService = inject(AddCardToCollectionService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  public readonly stateOptions = Object.values(CARD_STATES).map(s => ({
    label: s.label,
    value: s.code,
  }));

  public readonly languageOptions = Object.entries(CARD_LANGUAGES).map(([key, value]) => ({
    label: key,
    value
  }));

  failedToAddCard = false;
  cardHasBeenAdded = false;
  isUserConnected = false;
  isSubmitting = false;

  constructor() {
    this.isUserConnected = this.authService.isLoggedIn();
  }

  readonly form = this.formBuilder.nonNullable.group({
    state: ['', Validators.required],
    language: ['', Validators.required],
  });

  onStateChange(evt: string): void {
    this.form.patchValue({ state: evt });
  }

  onLanguageChange(evt: string): void {
    this.form.patchValue({ language: evt });
  }

  onSubmit(): void {
    if (!this.isUserConnected) {
      this.redirectToLogin();
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const { state, language } = this.form.getRawValue();

    const collectionItem: CollectionCard = {
      id: null,
      userId: null,
      cardId: this.cardId,
      lang: language!,
      state: state!,
    };

    this.addCardToCollectionService.execute(collectionItem).subscribe({
      next: () => {
        this.failedToAddCard = false;
        this.cardHasBeenAdded = true;
        this.addToCollection.emit(this.cardId);
        this.isSubmitting = false;
      },
      error: () => {
        this.failedToAddCard = true;
        this.cardHasBeenAdded = false;
        this.isSubmitting = false;
      },
    });
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}
