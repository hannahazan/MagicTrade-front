import { Component } from '@angular/core';
import {ButtonComponent} from "./components/button/button.component";
import {StatesComponent} from "./components/states/states.component";
import {StatusComponent} from "./components/status/status.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonComponent,
    StatesComponent,
    StatusComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'MagicTrade-front';
}
