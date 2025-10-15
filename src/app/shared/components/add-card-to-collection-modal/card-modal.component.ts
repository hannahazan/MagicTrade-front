import {Component, inject, input, output} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {SelectComponent} from "../select/select.component";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AddCardToCollectionService} from "../../../core/services/collection/add-card-to-collection.service";
import {UserCard} from "../../../models/user-card/user-card";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

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

  private readonly formBuilder = inject(FormBuilder);
  private readonly addCardToCollectionService = inject(AddCardToCollectionService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  failedToAddCard = false;
  cardHasBeenAdded = false;
  isUserConnected = false;

  stateOptions = [
    { label: 'Mint', value: 'MINT' },
    { label: 'Near-Mint', value: 'NEAR_MINT' },
    { label: 'Played', value: 'PLAYED' },
    { label: 'Poor', value: 'POOR' }
  ];

  languageOptions = [
    { label: 'French', value: 'FR' },
    { label: 'English', value: 'EN' },
    { label: 'Japanese', value: 'JP' }
  ];

  constructor() {
    this.isUserConnected = this.authService.isLoggedIn();
  }

  AddCardToCollectionForm = this.formBuilder.group({
    state: ['', [Validators.required]],
    language: ['', [Validators.required]]
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
      userId: null,
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

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}
