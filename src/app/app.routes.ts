import { Routes } from '@angular/router';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

export const routes: Routes = [
    {
        path: 'signup',
        component: SignUpPageComponent
    },
    {
        path: 'sandbox',
        component: SandboxComponent
    }
];
