import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http : HttpClient) { }

  fetchPosts() : Observable<Post[]> {
    return this._http.get<Post[]>(`${environment.BASE_URL}/posts`)
  }

  fetchPost(id : number) : Observable<Post> {
    return this._http.get<Post>(`${environment.BASE_URL}/posts/${id}`) 
  }

}
