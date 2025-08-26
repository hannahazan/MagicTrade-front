import { Routes } from '@angular/router';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import {CollectionComponent} from "./pages/collection/collection.component";
import {CardsComponent} from "./pages/cards/cards.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {TradersComponent} from "./pages/traders/traders.component";
import {WishlistComponent} from "./pages/wishlist/wishlist.component";

export const routes: Routes = [
    {
        path: 'signup',
        component: SignUpPageComponent
    },
    {
      path: 'login',
      component: LoginPageComponent
    },
    {
      path: 'profile',
      component: ProfilePageComponent
    },
    {
        path: 'sandbox',
        component: SandboxComponent
    },
    {
      path: 'collection',
      component: CollectionComponent
    },
    {
      path: 'cards',
      component: CardsComponent
    },
    {
      path: 'traders',
      component: TradersComponent
    },
    {
      path: 'wishlist',
      component: WishlistComponent
    }
];
