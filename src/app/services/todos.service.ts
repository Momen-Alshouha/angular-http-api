import { HttpClient , HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Todo } from '../interfaces/todo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private _http: HttpClient) {}

  fetchToDos(page : number , pageSize : number): Observable<Todo[]> {
    const params = new HttpParams()
    .set('_page', page.toString())
    .set('_limit', pageSize.toString());

    return this._http.get<Todo[]>(`${environment.BASE_URL}/todos` , { params});
  }

  fetchTodosWithUpperCaseTitle(page : number , pageSize : number): Observable<Todo[]> {
    return this.fetchToDos(page, pageSize).pipe(
      map((todos) =>
        todos.map((todo) => ({
          ...todo,
          title: todo.title.toUpperCase(),
        }))
      )
    );
  }
}
