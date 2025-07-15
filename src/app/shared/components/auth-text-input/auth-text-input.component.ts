import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth-text-input.component.html',
  styleUrl: './auth-text-input.component.scss'
})
export class AuthTextInputComponent implements OnInit {
  @Input({ required: true }) label = '';
  @Input({ required: true }) type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input({ required: true }) placeholder = '';
  @Input({ required: true }) control!: FormControl<unknown>;
  @Input() id = crypto.randomUUID();

  public isValid!: boolean

  ngOnInit() {
    this.isValid = this.control.valid;
  }

  get hasError(): boolean {
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }

}

