import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';

  @Output() clicked = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent) {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}
