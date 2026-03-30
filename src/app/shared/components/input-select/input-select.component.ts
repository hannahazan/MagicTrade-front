
import { Component, inject, Input } from '@angular/core';
import {NgOptionComponent, NgSelectComponent, NgDropdownPanelService } from '@ng-select/ng-select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { GetAllCatalogCard } from '../../../core/services/card/get-all-cards-catalog';
import { CardTypeModel } from '../../../models/card/card-type.model';
import { GetAllCardsSetsService } from '../../../core/services/card/get-all-cards-sets.service';
import { ScryfallSet } from '../../../models/card/card-set.model';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [NgSelectComponent, FormsModule, NgOptionComponent, JsonPipe, ReactiveFormsModule],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss'
})
export class InputSelectComponent {

  @Input({required:true}) label = "";
	@Input() options: {id : string, name : string}[] | null = []
	@Input({required:true}) placeholder = "";
	@Input({ required: true }) control!: FormControl<unknown>;
	isPlacedholderFixed : boolean = false;
	test:string[]=[]

  private readonly getAllCatalogCard = inject(GetAllCatalogCard)
  private readonly getAllSetsService = inject(GetAllCardsSetsService);

  ngOnInit():void{
	if(this.label === "Card name"){
		  this.getAllCatalogCard.execute("card-names").subscribe({
					next: (types: CardTypeModel) => {
					  	const results : {id : string, name : string}[] = []
						types.filters.map(s => results.push({id : s, name: s}) )
						this.options = results;
					},
					error: (err) => console.error('Erreur lors du chargement des sets', err)
				});
	}
	if(this.label === "Set"){
		this.getAllSetsService.execute().subscribe({
			  next: (sets:ScryfallSet[]) => {
				const results : {id : string, name : string}[] = []
				sets.map(s => results.push({id : s.id, name: s.name}) )
				this.options = results;
			  },
			  error: (err) => console.error('Erreur de chargement des sets', err)
			});
	}
  
  }
}
