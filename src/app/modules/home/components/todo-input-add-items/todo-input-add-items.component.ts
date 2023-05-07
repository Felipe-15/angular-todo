import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.sass'],
})
export class TodoInputAddItemsComponent {
  @Output() emitAddTask = new EventEmitter<Task>();
  taskText = '';
  addTask(): void {
    if (!this.taskText.trim()) return;

    this.emitAddTask.emit({ checked: false, text: this.taskText });
    this.taskText = '';
  }
}
