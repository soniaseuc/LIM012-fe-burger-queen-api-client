import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { Users } from '../../../interfaces/users';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() hijoUsers: any;

  usersArray: Users[] = [
    { _id: 1, email: { email: 'admin.maria@test.com'}, roles: {admin: true}},
  ];

  selectedUsers: Users = new Users();

  addOrEdit(){
    this.selectedUsers._id = this.usersArray.length + 1;

    this.usersArray.push(this.selectedUsers);
    this.selectedUsers = new Users();

    console.log(this.selectedUsers);
    console.log(this.usersArray);
  }
  constructor() { }

  ngOnInit(): void {
  }


}
