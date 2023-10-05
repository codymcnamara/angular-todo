import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../todos';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo : Todo | undefined;

  @Output() delete = new EventEmitter();
}
