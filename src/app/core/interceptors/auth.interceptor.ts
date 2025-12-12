import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {environment} from "../../../environments/environment";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  if (req.url.startsWith(environment.magicTradeApiUrl)) {
    const authReq = req.clone({ withCredentials: true });
    return next(authReq);
  }
  return next(req);
};
