import { Component, OnDestroy, OnInit } from '@angular/core';
import { Photo } from '../interfaces/photo';
import { PhotoService } from '../services/photo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit, OnDestroy {
  title: string;
  subTitle: string;
  photos: Photo[] = [];
  currentPage: number = 1;
  pageSize: number = 12;
  subscription?: Subscription;

  constructor(private _photoService: PhotoService) {
    this.title = 'Photos';
    this.subTitle = 'Photos List';
  }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos(): void {
    this.subscription = this._photoService
      .fetchPhotos(this.currentPage, this.pageSize)
      .subscribe((result: any) => {
        this.photos = result;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchPhotos();
  }

}
