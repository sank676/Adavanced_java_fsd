import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() tasks!: string[]; // Add the '!' symbol to indicate it is not null or undefined
  @Output() updateTask = new EventEmitter<{ oldTask: string, newTask: string }>();
  @Output() deleteTask = new EventEmitter<string>();

  constructor() {}

  onUpdateTask(oldTask: string, newTask: string) {
    this.updateTask.emit({ oldTask, newTask });
  }

  onDeleteTask(task: string) {
    this.deleteTask.emit(task);
  }
}