import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) {}

  completeTodo() {
    this.todoService.completeTodo(this.todo.id);
    console.log(this.todo)
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo.id);
    
  }
}
