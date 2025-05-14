import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();
  @Input({required:true}) id!: string;
  @Output() selectUsertask = new EventEmitter<string>();
 


 
onSelectUser(){
  this.selectUsertask.emit(this.id);
}

}
