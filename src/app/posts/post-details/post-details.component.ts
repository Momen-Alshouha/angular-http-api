import { Component, OnDestroy, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  @Input() post?: Post;
  postId?: number;
  subscription!: Subscription;
  postDetails?: Post;
  

  constructor(private route: ActivatedRoute, private _postService: PostService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idString = params.get('id');

      if (idString !== null) {
        this.postId = +idString;
        this.fetchPostDetails();
      }
    });
  }

  fetchPostDetails(): void {
    if (this.postId !== null && this.postId !== undefined) {
      this._postService.fetchPost(this.postId).subscribe({
        next: (response) => {
          this.post = response;
        },
        error: (err) => console.log(err),
        complete: () => console.log('complete'),
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
}
