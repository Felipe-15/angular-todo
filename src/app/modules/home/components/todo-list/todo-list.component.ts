import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  taskList: Task[] = [];

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

  ngOnInit(): void {}
}
