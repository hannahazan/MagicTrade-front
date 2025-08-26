import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthTextInputComponent} from "../../shared/components/auth-text-input/auth-text-input.component";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {InputErrorsComponent} from "../../shared/components/input-errors/input-errors.component";
import {LoginCredentials} from "../../models/login-credentials.model";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    AuthTextInputComponent,
    ButtonComponent,
    FormsModule,
    InputErrorsComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  failedLogin = false;

  loginForm = this.formBuilder.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
        Validators.required
    ]],
  });

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.auth.login(this.formValue).subscribe({
      next: () => {
        this.failedLogin = false;
        this.router.navigate(['/profile']);
      },
      error: () => {
        this.failedLogin = true;
      }
    })
  }

  get formValue(): LoginCredentials {
    const values = this.loginForm.getRawValue();

    return {
      email: values.email!,
      password: values.password!
    }
  }
}
