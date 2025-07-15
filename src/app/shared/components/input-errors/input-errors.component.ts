import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-errors',
  standalone: true,
  imports: [],
  templateUrl: './input-errors.component.html',
  styleUrl: './input-errors.component.scss'
})
export class InputErrorsComponent {
  @Input() control!: FormControl<unknown> | FormGroup;

  get hasError(): boolean {
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }

  get errorMessages(): string[] {
    if (!this.hasError || !this.control.errors) return [];

    const errors = this.control.errors;
    const messages: string[] = [];

    if (errors['required']) {
      messages.push('This field is required.');
    }
    if (errors['email']) {
      messages.push('Please enter a valid email address. example: "ajani@example.com"');
    }
    if (errors['minlength']) {
      messages.push(`Minimum ${errors['minlength'].requiredLength} characters.`);
    }
    if (errors['maxlength']) {
      messages.push(`Maximum ${errors['maxlength'].requiredLength} characters.`);
    }
    if (errors['pattern']) {
      const example = errors['pattern'].example;
      messages.push(
        example
          ? `Invalid format. Example: ${example}`
          : 'Invalid format.'
      );
    }
    if (errors['strongPassword']) {
      messages.push(errors['strongPassword'].message)
    }
    if (errors['passwordMismatch']) {
      messages.push("Passwords don't match");
    }
    if (errors['custom']) {
      messages.push(errors['custom'].message || 'Invalid value.');
    }

    return messages;
  }
}
