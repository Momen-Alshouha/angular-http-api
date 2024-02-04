import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return this._http.get<User>(`${environment.BASE_URL}/${id}`);
  }

}
