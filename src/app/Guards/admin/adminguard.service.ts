import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthConfigService } from 'src/app/services/auth-config.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardService {
  currentUser = this.authConfigService.currentUser;
  constructor(private authConfigService: AuthConfigService, private router: Router) { }

  //   canActivate(): Observable<boolean> {
  //   const isAdmin = this.authConfigService.isAdmin();
  //   console.log("is Admin", isAdmin);  
  //   return of (isAdmin) // "of" lo crea observable
  //   .pipe(tap( result=> {  // "tap" no devuelve algo, no altera info observable
  //     if (!result) {
  //       this.router.navigate(['/home']);
  //     }
  //   }) )
  // }
}
