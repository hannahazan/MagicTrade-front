import {Component, inject, OnInit} from '@angular/core';
import { TraderService } from '../../core/services/trader/trader.service';
import { TraderPreview } from '../../models/trader-preview.model';
import { TraderPreviewComponent } from '../../shared/components/trader-preview/trader-preview.component';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-traders',
  standalone: true,
  imports: [TraderPreviewComponent],
  templateUrl: './traders.component.html',
  styleUrls: ['./traders.component.scss'],
})
export class TradersComponent implements OnInit {

  private readonly route = inject(ActivatedRoute);

  // Liste des traders
  traders: TraderPreview[] = []

  // Indique si le chargement est en cours
  isLoading = true;

  // Injection du service qui communique avec le back-end
  constructor(private traderService: TraderService) {}

  ngOnInit(): void {
    // Quand le composant est créé, on charge la liste des traders
    this.loadTraders();
  }

  loadTraders(): void {
    this.traderService.getAllTraders().subscribe({
      next: (data) => {
        // On ajoute des infos fictives (pour le design ou les tests)
        this.traders = data.map(trader => ({
          ...trader,
          profilePicture: 'dragon.png',
          rate: 0,
        }));

        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des traders :', err);
        this.isLoading = false;
      },
    });
  }
}
