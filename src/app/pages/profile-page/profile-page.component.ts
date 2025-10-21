import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {UserRegister} from "../../models/user-register.model";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit{
  user?: UserRegister;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: data => this.user = data,
      error: err => console.error('Erreur récupération profil:', err)
    });
  }
}
