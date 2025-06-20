import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../../public/users/users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor } from '@angular/common';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NewTaskComponent]
})

export class AppComponent {


  users = DUMMY_USERS
  selectedUserId?:string

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId)
  }
  
 
  onSelectUser(id:string){
    this.selectedUserId = id
  }


  
}
