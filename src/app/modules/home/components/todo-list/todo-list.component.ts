import { Component, DoCheck } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements DoCheck {
  taskList: Task[] = JSON.parse(localStorage.getItem('list') || '[]');

  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
    localStorage.setItem('list', JSON.stringify(this.taskList));
  }

  deleteTask(taskIndex: number): void {
    this.taskList.splice(taskIndex, 1);
  }

  deleteAll(): void {
    const confirm = window.confirm(
      'Are you sure you want to delete all tasks?'
    );
    if (confirm) {
      this.taskList = [];
    }
  }

  onAddTask(task: Task): void {
    this.taskList.push(task);
  }

  inputValidation(task: string, index: number): void {
    if (task.length) return;

    const confirm = window.confirm(
      'Are you sure you want to delete this blank task?'
    );

    if (confirm) {
      this.deleteTask(index);
    }
  }
}
