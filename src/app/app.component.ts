import { Component } from '@angular/core';
import {ButtonComponent} from "./components/button/button.component";
import {StatesComponent} from "./components/states/states.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonComponent,
    StatesComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'MagicTrade-front';
}
