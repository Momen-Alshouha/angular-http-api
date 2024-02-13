import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, takeWhile, tap, toArray } from 'rxjs';
import { Photo } from '../interfaces/photo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private _http: HttpClient) {}

  fetchPhotos(page: number, pageSize: number): Observable<Photo[]> {
    const params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', pageSize.toString());

    return this._http.get<Photo[]>(`${environment.BASE_URL}/photos`, {
      params,
    });
  }
}
