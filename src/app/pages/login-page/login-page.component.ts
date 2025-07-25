import { Component } from '@angular/core';
import {AuthContainerComponent} from "../../shared/components/auth-container/auth-container.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    AuthContainerComponent,
    RouterLink
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
