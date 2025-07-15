import { Component, computed, input, Signal } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-errors',
  standalone: true,
  imports: [],
  templateUrl: './input-errors.component.html',
  styleUrl: './input-errors.component.scss'
})
export class InputErrorsComponent {
  control = input.required<FormControl<unknown>>();

  hasError: Signal<boolean> = computed(() => {
    const control = this.control();
    return control.invalid && (control.touched || control.dirty);
  })
  
  public errorMessages: Signal<string[]> = computed (() => {
    const control = this.control();

    if (!this.hasError() || !control.errors) return [];

    const errors = control.errors;
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
  })
    

}
