import { UsersService } from 'src/app/services/users/users.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/users';

@Component({
  selector: 'app-create-update-delete',
  templateUrl: './create-update-delete.component.html',
  styleUrls: ['./create-update-delete.component.css']
})
export class CreateUpdateDeleteComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }
  selectedUsers: User = new User();
  ngOnInit(): void {
  }

  Guardar(persona:User): void{
    this.service.createPersona(persona)
    .subscribe(data => {
      alert("Se agrego con exito ...!!!");
      this.router.navigate(['/users'])
    })
  }



}
