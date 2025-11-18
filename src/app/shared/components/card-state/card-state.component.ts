import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { CARD_STATES } from '../../../core/constants/card-states';

export type CardState = keyof typeof CARD_STATES;

@Component({
  selector: 'app-card-state',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card-state.component.html',
  styleUrl: './card-state.component.scss'
})
export class CardStateComponent {
  cardState = input.required<CardState | false>();

  get abbreviatedCardState(): string {
    const state = this.cardState();
    if (!state || typeof state !== 'string') return 'NC';
    return CARD_STATES[state]?.code ?? state;
  }
}
