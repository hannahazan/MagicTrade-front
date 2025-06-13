import { Component } from '@angular/core';
import {ButtonComponent} from "./components/button/button.component";
import {StatesComponent} from "./components/states/states.component";
import {LinkComponent} from "./components/link/link.component";
import {StatusComponent} from "./components/status/status.component";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonComponent,
    StatesComponent,
    LinkComponent,
    StatusComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'MagicTrade-front';
}
