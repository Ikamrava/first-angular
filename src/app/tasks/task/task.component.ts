import { Component, Input } from '@angular/core';
import { Task } from '../tasks.models';



@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@ Input() tasks:Task | undefined

}
