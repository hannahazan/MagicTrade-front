import { Component, inject } from '@angular/core';
import { AuthTextInputComponent } from '../../shared/components/auth-text-input/auth-text-input.component';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { strongPasswordValidator } from '../../shared/validators/strong-password-validator';
import { passwordMatchValidator } from '../../shared/validators/password-match-validator';
import { InputErrorsComponent } from '../../shared/components/input-errors/input-errors.component';
import { UserRegisterService } from '../../core/services/user-register.service';
import {Router} from "@angular/router";
import {UserRegister} from "../../models/user-register.model";

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [AuthTextInputComponent, ReactiveFormsModule, ButtonComponent, InputErrorsComponent],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})
export class SignUpFormComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly userRegisterService = inject(UserRegisterService);
  private readonly router = inject(Router);

  failedRegister = false;

  signupForm = this.formBuilder.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    username: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ]],
    /*firstName: ['', [
      Validators.required,
      Validators.maxLength(15)
    ]],
    lastName: ['', [
      Validators.required,
      Validators.maxLength(15)
    ]],*/
    country: ['', [
      Validators.required,
      Validators.maxLength(30)
    ]],
    department: ['', [
      Validators.required,
      Validators.maxLength(30)
    ]],
    city: ['', [
      Validators.required,
      Validators.maxLength(30)
    ]],
    passwords: this.formBuilder.group({
      password: ['', [
        Validators.required,
        strongPasswordValidator()
      ]],
      passwordConfirm: ['', [Validators.required]]
    }, { validators: passwordMatchValidator() })
  });

  onSubmit(): void {
    if (this.signupForm.invalid) return;

    this.userRegisterService.execute(this.formValue).subscribe({
      next: () => {
        this.failedRegister = false;
        this.router.navigate(['/login']);
      },
      error: () => {
        this.failedRegister = true;
      }
    });
  }

  getControl(path: string): FormControl {
    const control = this.signupForm.get(path);
      if (!control) {
        throw new Error(`FormControl introuvable pour le chemin '${path}'`);
      }
    return control as FormControl;
  }

  get formValue(): UserRegister {
    const values = this.signupForm.getRawValue();

    return {
      pseudo: values.username!,
      email: values.email!,
      country: values.country!,
      department: values.department!,
      city: values.city!,
      password: values.passwords.password!
    }
  }
}
