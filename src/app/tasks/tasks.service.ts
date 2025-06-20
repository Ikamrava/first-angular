import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})

export class TaskService {
private dummyTasks = [
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

constructor(){
  const tasks = localStorage.getItem("tasks")
  if(tasks){
      this.dummyTasks = JSON.parse(tasks)
  }
}

getUserTasks(userId:string){
    return this.dummyTasks.filter((task)=> task.userId === userId)
}

addTask(taskData: {title:string;summery:string; dueData:string},userId:string){

  this.dummyTasks.unshift({
    id: new Date().getTime().toString(),
    userId:userId,
    title: taskData.title,
    summary:taskData.summery,
    dueDate : taskData.dueData
  })
  this.saveTasks()
  
}

deletTask(id:string){
  this.dummyTasks = this.dummyTasks.filter(task=>task.id !== id)
  this.saveTasks()
}

private saveTasks(){
  localStorage.setItem("tasks",JSON.stringify(this.dummyTasks))
}

}




