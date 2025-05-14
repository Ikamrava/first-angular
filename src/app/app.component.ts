import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../../public/users/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent]
})

export class AppComponent {
  users = DUMMY_USERS
  
 
  onSelectUser(id:string){
    console.log(id)
      
  }
  
}
