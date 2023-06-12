import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoList: Todo[] = [
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
}
