import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import {  AuthConfigService } from '../../app/services/auth-config.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuardsService implements CanActivate {
currentUser = this.authConfigService.currentUser;
  constructor(private authConfigService: AuthConfigService, private router: Router) { }

  canActivate(): Observable<boolean> {
    const isAuth = this.authConfigService.isAuth();
    console.log("is Auth", isAuth);  
    return of (isAuth) // "of" lo crea observable
    .pipe(tap( result=> {  // "tap" no devuelve algo, no altera info observable
      if (!result) {
        this.router.navigate(['/login']);
      }
    }) )
  }
  }

