import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  protected todoList: Todo[] = [
    {
      id: 1,
      todo: "Learn Angular",
      completed: false
    },
    {
      id: 2,
      todo: "Lean React",
      completed: true
    },
    {
      id: 3,
      todo: "Learn Express", 
      completed: false
    }
  ]
  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(this.todoList);
  }

  completeTodo(id: number) {

  }
}
