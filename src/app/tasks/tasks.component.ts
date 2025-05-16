import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './tasks.service';



@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input() name: string | undefined;
@Input() user_id!:string;


constructor(private taskService:TaskService){}



showModal = false;
closeModal() {
    this.showModal = false;
  }

onAddingTask(){
  this.showModal = true
  }

get selectedUserTasks(){
  return this.taskService.getUserTasks(this.user_id)
}


onCompletTask(id:string){
  return this.taskService.deletTask(id)
}

}
