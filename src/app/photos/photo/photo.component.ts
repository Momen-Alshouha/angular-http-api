import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent {
  
  @Input() photo? : Photo;

  
}
