import { Component } from '@angular/core';
import { AuthTextInputComponent } from '../../shared/component/auth-text-input/auth-text-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [AuthTextInputComponent, ReactiveFormsModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})
export class SignUpFormComponent {

}
