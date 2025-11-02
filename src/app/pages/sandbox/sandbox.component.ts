import {Component, inject} from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { StatusComponent } from '../../shared/components/status/status.component';
import { AuthTextInputComponent } from '../../shared/components/auth-text-input/auth-text-input.component';
import {FormBuilder} from "@angular/forms";
import {TraderPreviewComponent} from "../../shared/components/trader-preview/trader-preview.component";
import {TraderPreview} from "../../models/trader-preview.model";

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [
    ButtonComponent,
    StatusComponent,
    AuthTextInputComponent,
    TraderPreviewComponent
  ],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.scss'
})
export class SandboxComponent {
  private readonly fb = inject(FormBuilder);

  trader: TraderPreview = {
    profilePicture: "dragon.png",
    pseudo: "JOHN WICK",
    rate: "4,8",
    location: "Auvergne-Rhône-Alpes",
  }

  sandboxForm = this.fb.group({
    input: ['']
  })
}
