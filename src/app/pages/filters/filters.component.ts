import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthTextInputComponent } from '../../shared/components/auth-text-input/auth-text-input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AuthCheckboxComponent } from '../../shared/components/auth-checkbox/auth-checkbox.component';
import {GetAllCardsService} from "../../core/services/card/get-all-cards.service";
import {FiltersService} from "../../core/services/filter/rester-filter.service";

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AuthTextInputComponent,
    ButtonComponent,
    AuthCheckboxComponent
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  private readonly fb = inject(FormBuilder);
  private readonly getAllCardsService = inject(GetAllCardsService);
  private readonly filtersService = inject(FiltersService);

  searchForm = this.fb.group({
    cardName: [''],
    typeLine: [''],
    colors: this.fb.group({
      white: [false],
      blue: [false],
      black: [false],
      red: [false],
      green: [false],
      colorless: [false],
    }),
    manaCost: [''],
    set: ['']
  });

  clearFilters() {
    this.searchForm.reset(this.filtersService.getDefaultFilters());
    this.onSubmit();
  }

  onSubmit() {
    const form = this.searchForm.value;

    const filters = {
      set: form.set || '',
      type: form.typeLine || '',
      rarity: '',
      color: '',
      ccm: form.manaCost || '',
      name: form.cardName || ''
    };

    console.log('Recherche avec filtres :', filters);

    this.getAllCardsService.execute(filters).subscribe({
      next: (res) => {
        console.log('Résultats de la recherche :', res.cards);
      },
      error: (err) => {
        console.error('Erreur lors de la recherche :', err);
      }
    });
  }
}
