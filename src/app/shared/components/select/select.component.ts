import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetAllCardsSetsService } from '../../../core/services/card/get-all-cards-sets.service';
import { ScryfallSet } from '../../../models/card/card-set.model';
import { GetAllCardsTypesService } from "../../../core/services/card/get-all-cards-types.service";
import { CardTypeModel } from "../../../models/card/card-type.model";

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() label = 'Label';
  @Input() placeholder = 'Select';
  @Input() selected = '';
  @Input() type: 'set' | 'type' | 'custom' = 'custom';
  @Input() options: { label: string, value: string }[] = [];

  @Output() valueChange = new EventEmitter<string>();

  private readonly getAllSetsService = inject(GetAllCardsSetsService);
  private readonly getAllTypesService = inject(GetAllCardsTypesService);

  ngOnInit(): void {
    if (this.type === 'set') {
      this.getAllSetsService.execute().subscribe({
        next: (sets: ScryfallSet[]) => {
          this.options = sets.map((s) => ({
            label: s.name,
            value: s.id
          }));
        },
        error: (err) => console.error('Erreur lors du chargement des sets', err)
      });
    } else if (this.type === 'type') {
      this.getAllTypesService.execute().subscribe({
        next: (types: CardTypeModel) => {
          this.options = types.filters.map(t => ({ label: t, value: t }));
        },
        error: (err) => console.error('Erreur lors du chargement des types', err)
      });
    }
  }

  onChange(value: string) {
    this.valueChange.emit(value);
  }
}
