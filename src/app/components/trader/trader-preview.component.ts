import { Component } from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";

@Component({
  selector: 'app-trader',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './trader-preview.component.html',
  styleUrl: './trader-preview.component.scss'
})
export class TraderPreviewComponent {

}
