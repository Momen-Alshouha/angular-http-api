import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

const API = {
  USERS : 'https://jsonplaceholder.typicode.com/users',
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }

  getUsers() : Observable<User[]> {
    return this._http.get<User[]>(`${environment.BASE_URL}/users`);
  }

  getUser(id : number) : Observable<User> {
    return this._http.get<User>(`${environment.BASE_URL}/users/${id}`);
  }

  getUsersWithUpperCaseName () : Observable<User[]> {
    return this.getUsers().pipe(
      map(users => users.map(user => ({
        ...user,
        name : user.name.toUpperCase(),
      }))
    ))
  }

}
