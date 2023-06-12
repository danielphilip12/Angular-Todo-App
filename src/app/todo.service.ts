import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  protected todoList: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([
    {
      id: 1,
      todo: 'Learn Angular',
      completed: false,
    },
    {
      id: 2,
      todo: 'Lean React',
      completed: true,
    },
    {
      id: 3,
      todo: 'Learn Express',
      completed: false,
    },
  ]);
  constructor() {}

  getTodos(): Observable<Todo[]> {
    return this.todoList.asObservable();
  }

  completeTodo(id: number) {
    const updatedList = this.todoList.getValue().map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed} : todo
    })
    this.todoList.next(updatedList);
  }

  addTodo(todo: Todo) {
    const updatedList = [...this.todoList.getValue(), todo]
    this.todoList.next(updatedList);
  }
}
