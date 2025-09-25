import {CanActivateFn, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import {inject} from "@angular/core";

export const visitorOnlyGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    return true;
  } else {
    void router.navigate(['/']);
    return false;
  }
};
