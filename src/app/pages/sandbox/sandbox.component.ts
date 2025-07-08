import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { StatesComponent } from '../../components/states/states.component';
import { StatusComponent } from '../../components/status/status.component';
import { FormInputComponent } from '../../shared/component/form-input/form-input.component';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [
    ButtonComponent,
    StatesComponent,
    StatusComponent,
    FormInputComponent
  ],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.scss'
})
export class SandboxComponent {

}
