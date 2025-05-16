import { Component, EventEmitter, inject, Inject, Input, Output } from '@angular/core';
import { Task } from '../tasks.models';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';



@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@ Input() task!:Task
@ Output() complete = new EventEmitter<string>()

private taskService = inject(TaskService)



onCompleteTask(){
  this.taskService.deletTask(this.task.id)
}

}
