import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-auth-checkbox',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './auth-checkbox.component.html',
  styleUrl: './auth-checkbox.component.scss'
})
export class AuthCheckboxComponent {
  @Input() label!: string;
  @Input() control!: FormControl;
}
