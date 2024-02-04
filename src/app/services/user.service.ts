import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

const API = {
  USERS : 'https://jsonplaceholder.typicode.com/users',
  USER : 'https://jsonplaceholder.typicode.com/users/1',
  
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }

  getUsers() : Observable<User[]> {
    return this._http.get<User[]>(API.USERS);
  }

  getUser() : Observable<User> {
    return this._http.get<User>(API.USER);
  }

}
