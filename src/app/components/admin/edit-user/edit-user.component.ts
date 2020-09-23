import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  selectedUsers: User = new User();
  constructor(private router: Router, private service: UsersService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = sessionStorage.getItem('id');
    this.service.getPersonaId(id)
    .subscribe(data => {
      this.selectedUsers = data;
    })
  }

  Actualizar(persona:User) {
    this.service.updatePersona(persona)
    .subscribe(data => {
      this.selectedUsers = data;
      alert("Se actualizo con Exito ... !!!");
      this.router.navigate(['/users']);
    })
  }
}
