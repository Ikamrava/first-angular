import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../tasks.models';



@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@ Input() task!:Task
@ Output() complete = new EventEmitter<string>()

onCompleteTask(){
  this.complete.emit(this.task.id)
}
}
