import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-listApp';
  
  tasks: string[];

  constructor() {
    this.tasks = [];
  }
    addTask(taskName: string) {
      this.tasks.push(taskName);
    }
  
    updateTask(taskName: string) {
      const index = this.tasks.indexOf(taskName);
      if (index !== -1) {
        const updatedTaskName = prompt('Enter the updated task name', taskName);
        if (updatedTaskName && updatedTaskName.trim()) {
          this.tasks[index] = updatedTaskName;
        }
      }
    }
  
    deleteTask(taskName: string) {
      const index = this.tasks.indexOf(taskName);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }
  
}
