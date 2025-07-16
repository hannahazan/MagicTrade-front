import { Routes } from '@angular/router';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import {CollectionComponent} from "./pages/collection/collection.component";

export const routes: Routes = [
    {
        path: 'signup',
        component: SignUpPageComponent
    },
    {
        path: 'sandbox',
        component: SandboxComponent
    },
    {
      path: 'collection',
      component: CollectionComponent
    }
];
