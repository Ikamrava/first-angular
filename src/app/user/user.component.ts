import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({required:true}) user!:User
@Input() selected!: boolean
@Output() selectUsertask = new EventEmitter<string>();
 


 
onSelectUser(){
  this.selectUsertask.emit(this.user.id);
}

}
