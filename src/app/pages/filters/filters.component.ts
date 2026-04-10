import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthTextInputComponent } from '../../shared/components/auth-text-input/auth-text-input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { AuthCheckboxComponent } from '../../shared/components/auth-checkbox/auth-checkbox.component';
import { Router } from '@angular/router';
import { mapColorFilters } from '../../shared/mappers/colorFilter-mapper';
import { GetFilters } from '../../signals/GetFilters';
import { MultipleSelectComponent } from '../../shared/components/multiple-select/multiple-select.component';
import { InputSelectComponent } from '../../shared/components/input-select/input-select.component';
import { mapFormatFilter } from '../../shared/mappers/formatFilter-mapper';
import { raritiesMapper } from '../../shared/mappers/raritiesFilter-mapper';
import { GetAllCatalogCard } from '../../core/services/card/get-all-cards-catalog';
import { CardTypeModel } from '../../models/card/card-type.model';
import { GetAllCardsService } from '../../core/services/card/get-all-cards.service';
import { GetAllCardsSetsService } from '../../core/services/card/get-all-cards-sets.service';
import { ScryfallSet } from '../../models/card/card-set.model';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AuthTextInputComponent,
    ButtonComponent,
    AuthCheckboxComponent,
    MultipleSelectComponent,
    InputSelectComponent
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private signalFilters = inject(GetFilters)
  private readonly catalogService = inject(GetAllCatalogCard);
  private readonly getAllSetsService = inject(GetAllCardsSetsService);

  types : { labelId: string, value: string }[] = [];
  set : {labelId: string, value: string}[] = [];
  cardNames : {labelId: string, value : string}[] = [];
 

  searchForm = this.fb.group({
    cardName: [null as string | null],
    set : [null as string | null],
    colors: this.fb.group({
      white: [false],
      blue: [false],
      black: [false],
      red: [false],
      green: [false]
    }),
    manaCost: [''],
    type:this.fb.control<string[] | null>(null),
    formats:this.fb.group({
    standard: '',
    pioneer: '',
    modern: '',
    legacy: '',
    pauper: '',
    vintage: '',
    commander:'',
    brawl: '',
    pauperCommander: '',
    duel: '',
    oldSchool: ''
    }),
    text :'',
    rarities: this.fb.group({
      common: [false],
      uncommon: [false],
      rare: [false],
      mythic: [false],
    }),
  });

  getCatalog(catalog : string, options : {}[]){
      this.catalogService.execute(catalog).subscribe({
                next: (types: CardTypeModel) => {
                 types.filters.map(t => options.push({ labelId: t, value: t }))
                },
                error: (err) => console.error('Erreur lors du chargement des types', err)
      });
  }

  ngOnInit() : void{
    this.getCatalog("artifact-types", this.types);
    this.getCatalog("land-types", this.types);
    this.getCatalog("enchantment-types", this.types);
    this.getCatalog("card-types", this.types);
    this.getCatalog("creature-types", this.types);

    //input-select need to realocate result because of 
    this.getAllSetsService.execute().subscribe({
            next: (sets:ScryfallSet[]) => {
              const results : {labelId : string, value : string}[] = []
              sets.map(s => results.push({labelId : s.id, value: s.name}) )
              this.set = results;
            },
            error: (err) => console.error('Erreur de chargement des sets', err)
    });

    this.catalogService.execute("card-names").subscribe({
					next: (types: CardTypeModel) => {
					  	const results : {labelId : string, value : string}[] = []
              types.filters.map(s => results.push({labelId: s, value: s}) )
              this.cardNames = results;
					},
					error: (err) => console.error('Erreur lors du chargement des card-names', err)
				});

  }

  onSubmit() {
    const form = this.searchForm.value;
    const filters = {
      set: form.set || '',
      rarities: raritiesMapper(form.rarities) || '',
      color: mapColorFilters(form.colors) || '',
      ccm: form.manaCost || '',
      name: form.cardName || '',
      type: form.type == null ? [] : form.type,
      standard: mapFormatFilter(form.formats?.standard),
      pioneer: mapFormatFilter(form.formats?.pioneer),
      modern: mapFormatFilter(form.formats?.modern),
      legacy: mapFormatFilter(form.formats?.legacy),
      pauper: mapFormatFilter(form.formats?.pauper),
      vintage: mapFormatFilter(form.formats?.vintage),
      commander: mapFormatFilter(form.formats?.commander),
      brawl: mapFormatFilter(form.formats?.brawl),
      pauperCommander: mapFormatFilter(form.formats?.pauperCommander),
      duel: mapFormatFilter(form.formats?.duel),
      oldSchool: mapFormatFilter(form.formats?.oldSchool),
      text : form.text || ''
    };

    this.signalFilters.setFilters(filters)
    this.router.navigate(['/cards']);
  }
}
