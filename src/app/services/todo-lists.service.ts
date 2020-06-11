import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service'

const todoListStorageKey = 'Todo_List';

const defaultTodoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

@Injectable({
  providedIn: 'root'
})
export class TodoListsService {
  private todoList: TodoItem[]
  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
   }

  getTodoList() {
    return this.todoList;
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem, changes) {
    this.todoList[this.getIndex(item)] = {...item,...changes};
    this.saveList();
  }

  private saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  deleteItem(item: TodoItem) {
    this.todoList.splice(this.getIndex(item),1);
    this.saveList();
  }

  private getIndex(item: TodoItem) {
    return this.todoList.indexOf(item);
  }
}
