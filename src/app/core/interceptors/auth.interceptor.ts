import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (req.url.startsWith(environment.magicTradeApiUrl)) {
    const authReq = req.clone({ withCredentials: true });
    return next(authReq).pipe(
      catchError(err => {
        if (err.status === 401 || err.status === 403) {
          authService.authState.value = false;
          if (router.url !== '/login') {
            router.navigate(['/login']);
          }
        }
        return throwError(() => err);
      })
    );
  }
  return next(req);
};
