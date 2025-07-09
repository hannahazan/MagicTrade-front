import { Component } from '@angular/core';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SignupFormComponent, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  imageUrl = 'assets/images/chandra.webp';
}
