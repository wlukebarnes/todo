import { Component, OnInit } from '@angular/core';
import { TodoListsService } from '../services/todo-lists.service';

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

  constructor(private todoListsService:TodoListsService) {}

  ngOnInit() {
  }

  addItem(title: string) {
    this.todoListsService.addItem({ title });
  }
}

