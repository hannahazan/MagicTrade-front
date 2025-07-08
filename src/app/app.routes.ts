import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';

export const routes: Routes = [
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'sandbox',
        component: SandboxComponent
    }
];
