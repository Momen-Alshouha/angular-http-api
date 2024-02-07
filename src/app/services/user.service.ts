import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) {}

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
        role : user.id === 1 ? 'admin' : 'user',
        img : `${environment.DEFAULT_IMG}/${user.username.toLowerCase()}`
      }))
    ))
  }

}
