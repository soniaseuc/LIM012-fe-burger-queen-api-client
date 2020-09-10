import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthConfigService {
  public url: string;
  checkUser: any;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  login(user: any): Observable<any> { // usandose
    return this.http.post<any>(`${this.url}auth`, user); // create
  }

  setToken(token: string): void {  // usandose
    return sessionStorage.setItem('token', token);
  }

  getUser(idUser): any { //peticion de user id
    return this.http.get(`${this.url}users/${idUser}`); // read
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
  }
}
