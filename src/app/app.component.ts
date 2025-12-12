import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import {AuthService} from "./core/services/auth.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'MagicTrade';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.refreshSession().subscribe();
  }
}
