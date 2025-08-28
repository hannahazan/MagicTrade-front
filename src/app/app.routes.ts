import { Routes } from '@angular/router';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import {CollectionComponent} from "./pages/collection/collection.component";
import {CardsComponent} from "./pages/cards/cards.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {TradersComponent} from "./pages/traders/traders.component";
import {WishlistComponent} from "./pages/wishlist/wishlist.component";
import {FiltersComponent} from "./pages/filters/filters.component";
import {authGuard} from "./core/guards/auth.guard";
import {roleGuard} from "./core/guards/role.guard";
import {visitorOnlyGuard} from "./core/guards/visitor-only.guard";
import {AdminBoardComponent} from "./pages/admin-board/admin-board.component";
import {CardPageComponent} from "./pages/card-page/card-page.component";

export const routes: Routes = [
    {
      path: 'signup',
      component: SignUpPageComponent,
      canActivate: [visitorOnlyGuard]
    },
    {
      path: 'login',
      component: LoginPageComponent,
      canActivate: [visitorOnlyGuard]
    },
    {
      path: 'profile',
      component: ProfilePageComponent,
      canActivate: [authGuard]
    },
    {
      path: 'sandbox',
      component: SandboxComponent,
      canActivate: [roleGuard("ROLE_ADMIN")],
    },
    {
      path: 'collection',
      component: CollectionComponent,
      canActivate: [authGuard]
    },
    {
      path: 'cards',
      component: CardsComponent
    },
    {
      path: 'card',
      component: CardPageComponent,
    },
    {
      path: 'traders',
      component: TradersComponent
    },
    {
      path: 'wishlist',
      component: WishlistComponent,
      canActivate: [authGuard]
    },
  {
    path: 'filters',
    component: FiltersComponent
  },
    {
      path: 'admin',
      component: AdminBoardComponent,
      canActivate: [roleGuard("ROLE_ADMIN")],
    },

];
