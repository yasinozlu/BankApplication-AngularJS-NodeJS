import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    var registerService = this.injector.get(RegisterService)
    if (registerService.isAuthenticated) {
      var authRequest = req.clone({
        headers: req.headers.set('authorization', 'token ' + registerService.token)
      });
      return next.handle(authRequest);
    }
    else {
      return next.handle(req);
    }

  }
}
