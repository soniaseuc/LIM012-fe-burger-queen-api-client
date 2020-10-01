import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../interfaces/users';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() hijoUsers: any;
  selectedUsers: User = new User();
  selectedUser: User = new User();
 

  usersArray: User[];

  constructor(private userService:UsersService, private router:Router, private service: UsersService ) { }

  ngOnInit(): void {
    this.userService.getPersonas()
    .subscribe(data => {
      this.usersArray = data;
    })
  
  }

  Editar1(){
    let id = sessionStorage.getItem('id');
    this.service.getPersonaId(id)
    .subscribe(data => {
      this.selectedUser = data;
    })
  }

  Actualizar(persona:User) {
    this.service.updatePersona(persona)
    .subscribe(data => {
      this.selectedUser = data;
      alert("Se actualizo con Exito ... !!!");
     // this.router.navigate(['/users']);
     this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/users']);
  }); 
      
    })
  }


  Editar(persona:User): void {
    sessionStorage.setItem("id", persona._id.toString());
    // this.router.navigate(['/edit']);
  }

  Delete(persona: User){
    this.userService.deletePersona(persona)
    .subscribe(data => {
      this.usersArray = this.usersArray.filter( p => p !== persona);
      alert("Usuario eliminado ...");
    })
  }

  Guardar(persona:User): void{
    this.service.createPersona(persona)
    .subscribe(data => {
      alert("Se agrego con exito ...!!!");
      this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/users']);
    })
  })
 }
}
  // selectedUsers: User = new User();

  // addOrEdit(): void{ // era botton sumit que añadia nuevo user pero no en API
  //   if (this.selectedUsers._id === '0') {
  //     // this.selectedUsers._id = this.usersArray.length + 1;
  //     console.log(this.selectedUsers);
  //     this.usersArray.push(this.selectedUsers);
  //   }
  //   this.selectedUsers = new User();    
  //   console.log(this.usersArray);
  // }

  // openForEdit(user: User): void { // cdo click sobre nombre mostraba en imput para editar
  //   this.selectedUsers = user;
  // }

  // delete() { // borraba pero no en api, en un solo componente todo
  //   this.usersArray = this.usersArray
  //   .filter(x => x != this.selectedUsers);
  //   this.selectedUsers = new User();
  // }

 // add() {
 //   this.router.navigate(['/user']);
 // }