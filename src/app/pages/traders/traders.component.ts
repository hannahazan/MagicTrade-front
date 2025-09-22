import { Component } from '@angular/core';
import {TraderPreviewComponent} from "../../shared/components/trader-preview/trader-preview.component";
import {SelectComponent} from "../../shared/components/select/select.component";
import {TraderPreviewModel} from "../../models/trader-preview.model";

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
  traders: TraderPreviewModel[] = [
    {
      profilePicture: "dragon.png",
      pseudo: "JOHN WICK",
      rate: "4,8",
      location: "Auvergne-Rhône-Alpes",
    },
    {
      profilePicture: "dragon.png",
      pseudo: "JOHN WICK",
      rate: "4,8",
      location: "Auvergne-Rhône-Alpes",
    },
    {
      profilePicture: "dragon.png",
      pseudo: "JOHN WICK",
      rate: "4,8",
      location: "Auvergne-Rhône-Alpes",
    },
    {
      profilePicture: "dragon.png",
      pseudo: "JOHN WICK",
      rate: "4,8",
      location: "Auvergne-Rhône-Alpes",
    },
    {
      profilePicture: "dragon.png",
      pseudo: "JOHN WICK",
      rate: "4,8",
      location: "Auvergne-Rhône-Alpes",
    }
  ]

  onSortChange(value: string) {
    console.log('Selected value:', value);
  }
}
