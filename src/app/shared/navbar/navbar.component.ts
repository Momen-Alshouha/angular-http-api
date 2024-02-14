import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  showDropdown: boolean = false;

  constructor(private router: Router) { }

  toggleDropdown(event: MouseEvent) {
    this.showDropdown = !this.showDropdown;
    event.stopPropagation(); // Prevent the default behavior of the click event
  }
}
