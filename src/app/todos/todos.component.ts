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
  currentPage : number = 1;
  pageSize: number = 12;
  todos$! : Observable<Todo[]>;

  constructor(private _todosService : TodosService) {
    this.title = 'ToDos';
    this.subTitle = 'ToDos List';
  };

  ngOnInit(): void {
    this.onGetTodos();
  }

  onGetTodos() : void {
    this.todos$ = this._todosService.fetchToDos(this.currentPage , this.pageSize);
  }

  onPageChange(page: number): void {
    if (page>0) {
      this.todos$ = this._todosService.fetchToDos(page,this.pageSize);
    }
  }
}
