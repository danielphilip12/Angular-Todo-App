import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-new-todo-form',
  templateUrl: './new-todo-form.component.html',
  styleUrls: ['./new-todo-form.component.css']
})
export class NewTodoFormComponent {
  newTodo: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if(this.newTodo === '') {
      return;
    }
    const todo: Todo = {
      id: Math.floor(Math.random() * 1000),
      todo: this.newTodo,
      completed: false
    }

    this.todoService.addTodo(todo);
    this.newTodo = '';
  }
}
