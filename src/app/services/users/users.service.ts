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

  createPersona(persona:User){
    console.log(`create persona: ${persona._id}`);
    return this.http.post<User>(`${this.url}users`, persona);
  }

  getPersonaId(id:string){
    console.log(`get persona id: ${id}`);
    return this.http.get<User>(`${this.url}users/${id}`);
  }

  updatePersona(persona:User){
    console.log(`update persona: ${persona}`);
    console.log(`update persona id: ${persona._id}`);
    let id = persona._id;
    delete persona._id;
    return this.http.put<User>(`${this.url}users/${id}`, persona);
  }

  deletePersona(persona:User){
    console.log(`delete persona: ${persona}`);
    console.log(`delete persona id: ${persona._id}`);
    return this.http.delete<User>(`${this.url}users/${persona._id}`);
  }
}
