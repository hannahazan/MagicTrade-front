import { Component, inject, OnInit } from '@angular/core';
import { AuthTextInputComponent } from '../../shared/component/auth-text-input/auth-text-input.component';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../shared/component/button/button.component";

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [AuthTextInputComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})
export class SignUpFormComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  
  signupForm = this.formBuilder.group({
    email: ['', [
      Validators.required, 
      Validators.email
    ]],
    username: [''],
    firstName: [''],
    lastName: [''],
    country: [''],
    department: [''],
    city: [''],
    passwords: this.formBuilder.group({
      password: [''],
      passwordConfirm: ['']
    })
  });

  ngOnInit() {
    this.signupForm.valueChanges.subscribe(value => {
      console.log('Form updated:', value);
    });
  }

  getControl(path: string): FormControl {
  const control = this.signupForm.get(path);
    if (!control) {
      throw new Error(`FormControl introuvable pour le chemin '${path}'`);
    }
  return control as FormControl;
}
}
