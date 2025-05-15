import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";



@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input() name: string | undefined;
@Input() user_id!:string;


showModal = false;
closeModal() {
    this.showModal = false;
  }

onAddingTask(){
  this.showModal = true
  }

onCreatetask(taskData: {title:string;summery:string; dueData:string}){

  this.dummyTasks.push({
    id: new Date().getTime().toString(),
    userId:this.user_id,
    title: taskData.title,
    summary:taskData.summery,
    dueDate : taskData.dueData
  })

  this.showModal = false
  
}



dummyTasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
   {
    id: 't4',
    userId: 'u2',
    title: 'Build Angular',
    summary:
      'Learn all the basic and advanced features of Angular hem.',
    dueDate: '2025-12-31',
  },
   {
    id: 't5',
    userId: 'u4',
    title: 'I am  Angular',
    summary:
      'Learn all the bures of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
   {
    id: 't6',
    userId: 'u5',
    title: 'Who is Angular',
    summary:
      'Learn all the of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
]

get selectedUserTasks(){
  return this.dummyTasks.filter((task)=> task.userId === this.user_id)
}

onCompletTask(id:string){
  this.dummyTasks = this.dummyTasks.filter(task=>task.id !== id)
}





}
