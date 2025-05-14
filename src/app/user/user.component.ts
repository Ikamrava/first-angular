import { Component, EventEmitter, Input, input, Output } from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({required:true}) user!:User
  @Output() selectUsertask = new EventEmitter<string>();
 


 
onSelectUser(){
  this.selectUsertask.emit(this.user.id);
}

}
