import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  taskName: string = '';

  @Output() addTask: EventEmitter<string> = new EventEmitter<string>();

  addNewTask() {
    if (this.taskName.trim()) {
      this.addTask.emit(this.taskName);
      this.taskName = '';
    }
  }
}