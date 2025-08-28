import {Component, inject} from '@angular/core';
import {AuthTextInputComponent} from "../../shared/components/auth-text-input/auth-text-input.component";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {SelectComponent} from "../../shared/components/select/select.component";
import {AuthCheckboxComponent} from "../../shared/components/auth-checkbox/auth-checkbox.component";

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    AuthTextInputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    SelectComponent,
    AuthCheckboxComponent
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  private readonly fb = inject(FormBuilder);

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

  onSubmit() {
    console.log(this.searchForm.value);
  }

  onSortChange(value: string) {
    console.log('Selected value:', value);
  }
}
