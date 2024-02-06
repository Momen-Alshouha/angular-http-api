import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private _http : HttpClient) { };

  fetchPhotos() : Observable<Photo[]> {
    return this._http.get<Photo[]>(`${environment.BASE_URL}/photos`);
  }

}
