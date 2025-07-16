import { Component, Input } from '@angular/core';
import { SignUpFormComponent } from '../../../components/sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-auth-container',
  standalone: true,
  imports: [SignUpFormComponent],
  templateUrl: './auth-container.component.html',
  styleUrl: './auth-container.component.scss'
})
export class AuthContainerComponent {
  @Input() authType: "signup" | "login" = "signup";
}
