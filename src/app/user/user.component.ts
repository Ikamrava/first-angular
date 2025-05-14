import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @ Input() avatar!: string ;
  @ Input() name!: string ;
onSelectUser(){}

}
