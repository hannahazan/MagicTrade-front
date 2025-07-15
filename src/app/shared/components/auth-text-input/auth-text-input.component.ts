import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth-text-input.component.html',
  styleUrl: './auth-text-input.component.scss'
})
export class AuthTextInputComponent {
  @Input() label = '';
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() placeholder = '';
  @Input() control!: FormControl<unknown>;
  @Input() id = crypto.randomUUID();

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

