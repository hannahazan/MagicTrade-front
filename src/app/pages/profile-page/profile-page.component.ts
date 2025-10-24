import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {Profile} from "../../models/user/profile.model";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit{
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  user!: Profile;

  profileForm = this.formBuilder.group({
    pseudo: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ]],
    email: ["email@example.com", [
      Validators.required,
      Validators.email
    ]],
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
    ]]
  })

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: (data: Profile) => {
        this.user = data;
        this.profileForm.patchValue(data);
      },
      error: err => console.error('Erreur récupération profil:', err)
    });
  }

  onSubmit(): void {
     /* TODO :
        - soumettre la modification du profil via un service, gestion des erreurs/validité du form
        - finir le HTML SCSS pour afficher les trades avec les status
        -
      */
  }
}
