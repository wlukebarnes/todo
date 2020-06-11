import { Component, OnInit } from '@angular/core';
import { TodoListsService } from '../services/todo-lists.service';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  template: `
    <div class="todo-app">
      <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
      <ul>
        <li *ngFor="let todoItem of todoList">
          <app-todo-item [item]="todoItem"></app-todo-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  title = 'todo-lists';
  todoList: TodoItem[];
  constructor(private todoListsService:TodoListsService) {}

  ngOnInit() {
    this.todoList = this.todoListsService.getTodoList();
  }

  addItem(title: string) {
    this.todoListsService.addItem({ title });
  }
}

