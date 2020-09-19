import { User } from './../../interfaces/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url: string;

  constructor(private http:HttpClient) { 
    this.url = environment.apiUrl;
  }

  getPersonas() {
    return this.http.get<User[]>(`${this.url}users`);
  }
}
