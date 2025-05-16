import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Input() userId!: string
@Output() close = new EventEmitter<void>()


enteredTitle = ""
enterdSummery = ""
enteredDueData = ""
private taskService = inject(TaskService)




onCancel(){
 this.close.emit();
}

onSubmit(){
  this.taskService.addTask({
    title:this.enteredTitle,
    summery:this.enterdSummery,
    dueData:this.enteredDueData
  },this.userId)

  this.close.emit();
}

}
