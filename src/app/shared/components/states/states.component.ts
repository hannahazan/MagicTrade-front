import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgClass } from "@angular/common";
import { CARD_STATES } from "../../../core/constants/card-states";

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [NgClass],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss'
})
export class StatesComponent implements OnChanges {
  @Input({ required: true }) state!: string;

  stateClass = '';
  stateAbbreviation = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['state']) {
      this.updateStateDisplay();
    }
  }

  private updateStateDisplay(): void {
    const key = this.state?.toUpperCase() ?? '';
    const info = CARD_STATES[key];

    this.stateClass = info?.cssClass ?? 'states--mint';
    this.stateAbbreviation = info?.code ?? '?';
  }
}
