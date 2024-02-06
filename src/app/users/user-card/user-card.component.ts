import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user? : User;
  userId?: number | null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idString = params.get('id');

      if (idString !== null) {
        this.userId = +idString;
        this.fetchUserDetails();
      }
    });
  }

  fetchUserDetails(): void {
    if (this.userId !== null && this.userId !== undefined) {
      this.userService.getUser(this.userId).subscribe(
        {
          next: (response) => {
            this.user = response;
          },
          error: (err) => console.log(err),
          complete: () => console.log("complete user card")
        }
      );
    }
  }

}
