import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/component/button/button.component';
import { StatesComponent } from '../../shared/component/states/states.component';
import { StatusComponent } from '../../shared/component/status/status.component';
import { AuthTextInputComponent } from '../../shared/component/auth-text-input/auth-text-input.component';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [
    ButtonComponent,
    StatesComponent,
    StatusComponent,
    AuthTextInputComponent
  ],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.scss'
})
export class SandboxComponent {

}
