import { Component, inject, Input } from '@angular/core';
import {NgOptionComponent, NgSelectComponent, NgDropdownPanelService } from '@ng-select/ng-select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-multiple-select',
  standalone: true,
  imports: [NgSelectComponent, FormsModule, NgOptionComponent, JsonPipe, ReactiveFormsModule],
  templateUrl: './multiple-select.component.html',
  styleUrl: './multiple-select.component.scss'
})
export class MultipleSelectComponent {
	@Input({required:true}) label = "";
	@Input() options: { labelId: string, value: string }[] = [];
	@Input({required:true}) placeholder = "";
	@Input({ required: true }) control!: FormControl<unknown>;
	isPlacedholderFixed : boolean = false;
	selectedOptions: any;
	test:string[]=[]
	
}
