import { Component } from '@angular/core';
import { todos, Todo } from './todos';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[];

  constructor(private formBuilder: FormBuilder){
    this.todos = todos;
  }

  todoForm = this.formBuilder.group({
    title: ''
  })

  onSubmit() : void {
    if (typeof this.todoForm.value.title === 'string' && this.todoForm.value.title !== ''){
      let newId = Date.now();
      this.todos.push(
        {
          id: newId,
          title: this.todoForm.value.title
        }
      )

      this.todoForm.reset()
    }
  }

  handleDelete(todo: Todo){
    this.todos = this.todos.filter(oldTodo => oldTodo.id !== todo.id);
  }
}
