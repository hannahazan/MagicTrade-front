
import { Component, Input } from '@angular/core';
import {NgOptionComponent, NgSelectComponent } from '@ng-select/ng-select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [NgSelectComponent, FormsModule, NgOptionComponent, JsonPipe, ReactiveFormsModule],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss'
})
export class InputSelectComponent {

  @Input({required:true}) label = "";
	@Input() options: {labelId : string, value : string}[] = []
	@Input({required:true}) placeholder = "";
	@Input({ required: true }) control!: FormControl<unknown>;
	isPlacedholderFixed : boolean = false;

}
