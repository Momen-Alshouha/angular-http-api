import { Component, OnDestroy, OnInit } from '@angular/core';
import { Photo } from '../interfaces/photo';
import { PhotoService } from '../services/photo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent implements OnInit , OnDestroy {
  
  photos? : Photo[];

  subscription?:Subscription;

  constructor(private _photoService : PhotoService) {};

  ngOnInit(): void {
      this.onGetPhotos();
  }

  onGetPhotos() : void {
    this.subscription = this._photoService.fetchPhotos().subscribe(
      (photosResponse) => {
        this.photos = photosResponse;
    })
  }

  ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
  }
  
}
