import {Component, input} from '@angular/core';
import {NgClass} from "@angular/common";
import {CARD_STATES} from "../../../core/constants/card-states";
import {CardState} from "../../../models/card-state";

@Component({
  selector: 'app-card-state',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './card-state.component.html',
  styleUrl: './card-state.component.scss'
})
export class CardStateComponent {
  cardState = input.required<CardState | false>();

  get abbreviatedCardState(): string {
    const state = this.cardState();
    if (state) return CARD_STATES[state] ?? state;
    return "NC";
  }
}
