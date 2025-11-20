import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CardState, CardStateComponent } from '../card-state/card-state.component';
import { TraderPreview } from '../../../models/trader-preview.model';

@Component({
  selector: 'app-trader-preview',
  standalone: true,
  imports: [ButtonComponent, CardStateComponent],
  templateUrl: './trader-preview.component.html',
  styleUrls: ['./trader-preview.component.scss'],
})
export class TraderPreviewComponent {
  traderPreview = input.required<TraderPreview>();
  ownedCardState = input<string>;
}
