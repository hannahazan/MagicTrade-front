import { Component } from '@angular/core';
import {TraderPreviewComponent} from "../../components/trader-preview/trader-preview.component";
import {SelectComponent} from "../../shared/components/select/select.component";

@Component({
  selector: 'app-traders',
  standalone: true,
  imports: [
    TraderPreviewComponent,
    SelectComponent
  ],
  templateUrl: './traders.component.html',
  styleUrl: './traders.component.scss'
})
export class TradersComponent {
  onSortChange(value: string) {
    console.log('Selected value:', value);
  }
}
