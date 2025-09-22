import {Component, input, Input} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {CardStateComponent} from "../card-state/card-state.component";
import {CardState} from "../../../models/card-state.model";
import {TraderPreview} from "../../../models/trader-preview.model";

@Component({
  selector: 'app-trader',
  standalone: true,
  imports: [
    ButtonComponent,
    CardStateComponent
  ],
  templateUrl: './trader-preview.component.html',
  styleUrl: './trader-preview.component.scss'
})
export class TraderPreviewComponent {
  traderPreview = input.required<TraderPreview>();
  ownedCardState = input<CardState | false>(false);
}
