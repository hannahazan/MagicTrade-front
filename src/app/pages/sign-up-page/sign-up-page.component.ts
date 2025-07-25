import { Component } from '@angular/core';
import { AuthContainerComponent } from '../../shared/components/auth-container/auth-container.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [AuthContainerComponent, RouterLink],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent {

}
