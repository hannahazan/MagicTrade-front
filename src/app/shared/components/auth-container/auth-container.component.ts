import { Component, Input } from '@angular/core';
import { SignUpFormComponent } from '../../../components/sign-up-form/sign-up-form.component';
import {LoginFormComponent} from "../../../components/login-form/login-form.component";

@Component({
  selector: 'app-auth-container',
  standalone: true,
  imports: [SignUpFormComponent, LoginFormComponent],
  templateUrl: './auth-container.component.html',
  styleUrl: './auth-container.component.scss'
})
export class AuthContainerComponent {
  @Input() authType: "signup" | "login" = "signup";

  get getIllustration(): string {
    if (this.authType === "signup") return "/images/chandra.webp"
    return "/images/avacyn.webp";
  }
}
