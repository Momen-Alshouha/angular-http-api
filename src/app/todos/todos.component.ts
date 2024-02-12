import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Observable, map, take, tap } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  title:string;
  subTitle:string;
  todos$! : Observable<Todo[]>;

  constructor(private _todosService : TodosService) {
    this.title = 'ToDos';
    this.subTitle = 'ToDos List';
  };

  ngOnInit(): void {
    this.onGetTodos();
  }

  onGetTodos() : void {
    this.todos$ = this._todosService.fetchToDos();
  }
}
