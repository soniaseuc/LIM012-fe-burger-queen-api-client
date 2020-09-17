import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthConfigService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public url: string;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
    this.url = environment.apiUrl;
  }

  login(user: any): Observable<any> { // usandose
    return this.http.post<any>(`${this.url}auth`, user); // create
  }

  setToken(token: string): void {  // usandose
    return sessionStorage.setItem('token', token);
  }

  getUser(idUser): any { // peticion de user id
    return this.http.get(`${this.url}users/${idUser}`); // read
  }

  checkUser(user): Observable<any> {
    return this.http.post(`${this.url}auth`, user )
      .pipe(map(userLogged => {
            sessionStorage.setItem('currentUser', userLogged['token']);
            this.currentUserSubject.next(user);
            return userLogged;
      }));
    }

  // getToken(): string { // no se usa ahora
  //   return sessionStorage.get('token');
  // }

  // getUserLogged(): any { // no se usa ahora
  //   const token = this.getToken();
  //   // Aquí iría el endpoint para devolver el usuario para un token
  // }

  logout(): void { // usandose
    sessionStorage.removeItem('currentUser');
    // sessionStorage.removeItem('emailCurrentUser');
  }
}
