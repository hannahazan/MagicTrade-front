import {Component, input, Input} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {CardStateComponent} from "../card-state/card-state.component";
import {CardStateModel} from "../../../models/card-state.model";
import {TraderPreviewModel} from "../../../models/trader-preview.model";

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
  traderPreview = input.required<TraderPreviewModel>();
  ownedCardState = input<CardStateModel | false>(false);
}
