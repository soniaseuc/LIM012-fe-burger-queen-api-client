import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../interfaces/users';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() hijoUsers: any;

  usersArray: User[];

  constructor(private userService:UsersService, private router:Router ) { }

  ngOnInit(): void {
    this.userService.getPersonas()
    .subscribe(data => {
      this.usersArray = data;
    })
  }

  selectedUsers: User = new User();

  addOrEdit(): void{ // era botton sumit que añadia nuevo user pero no en API
    if (this.selectedUsers._id === '0') {
      // this.selectedUsers._id = this.usersArray.length + 1;
      console.log(this.selectedUsers);
      this.usersArray.push(this.selectedUsers);
    }
    this.selectedUsers = new User();    
    console.log(this.usersArray);
  }

  openForEdit(user: User): void { // cdo click sobre nombre mostraba en imput para editar
    this.selectedUsers = user;
  }

  delete() { // borraba pero no en api, en un solo componente todo
    this.usersArray = this.usersArray
    .filter(x => x != this.selectedUsers);
    this.selectedUsers = new User();
  }

  add() {
    this.router.navigate(['/user']);
  }
}
