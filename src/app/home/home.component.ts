import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  sectionsDescription : string ;
  
  constructor(){
    this.sectionsDescription = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, deserunt! Porro omnis, sapiente molestiae reiciendis accusantium aspernatur quia voluptatem ea laborum neque, id, odio a delectus alias numquam repudiandae labore.';
  }
}
