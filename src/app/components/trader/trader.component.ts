import { Component } from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";

@Component({
  selector: 'app-trader',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './trader.component.html',
  styleUrl: './trader.component.scss'
})
export class TraderComponent {

}
