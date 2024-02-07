import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit , OnDestroy {
  
  users?: User[];
  private userSubscription! : Subscription;


  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers() : void {
    this.userSubscription = this._userService.getUsersWithUpperCaseName().subscribe({
      next: (response) => (this.users = response),
      error: (err) => console.log('error', console.error(err)),
      complete: () => console.log('complete retrieving data!'),
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
