import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit , OnDestroy {
  posts!: Post[];

  subscription!: Subscription;

  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this.onGetPosts();
  }

  onGetPosts(): void {
    this.subscription = this._postService.fetchPosts().subscribe({
      next: (postsResponse) => {
        this.posts = postsResponse;
      },
      error: (err) => console.log(err),
      complete: () => console.log('posts completes!'),
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }   
  }

}
