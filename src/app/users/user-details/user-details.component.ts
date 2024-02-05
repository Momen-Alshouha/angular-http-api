import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  userId?: number | null;
  user?: User;

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
          complete: () => console.log("complete")
        }
      );
    }
  }
}
