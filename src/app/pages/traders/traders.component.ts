import { Component } from '@angular/core';
import {TraderComponent} from "../../components/trader/trader.component";
import {SelectComponent} from "../../shared/components/select/select.component";

@Component({
  selector: 'app-traders',
  standalone: true,
  imports: [
    TraderComponent,
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
