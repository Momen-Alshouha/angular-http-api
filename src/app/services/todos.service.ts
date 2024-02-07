import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Todo } from '../interfaces/todo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private _http: HttpClient) {}

  fetchToDos(): Observable<Todo[]> {
    return this._http.get<Todo[]>(`${environment.BASE_URL}/todos`);
  }

  fetchTodosWithUpperCaseTitle(): Observable<Todo[]> {
    return this.fetchToDos().pipe(
      map((todos) =>
        todos.map((todo) => ({
          ...todo,
          title: todo.title.toUpperCase(),
        }))
      )
    );
  }
}
