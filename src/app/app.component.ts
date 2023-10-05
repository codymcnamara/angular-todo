import { Component } from '@angular/core';
import { todos, Todo } from './todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo';
  todos: Todo[];

  constructor(){
    this.todos = todos;
  }
}
