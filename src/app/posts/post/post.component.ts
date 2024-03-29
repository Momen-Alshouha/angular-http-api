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
  title : string;
  subTitle:string;
  posts: Post[] = [];

  subscription!: Subscription;

  constructor(private _postService: PostService) {
    this.title='Posts'
    this.subTitle = 'Posts List';
  }

  ngOnInit(): void {
    this.onGetPosts();
  }

  onGetPosts(): void {
    this.subscription = this._postService.fetchPostsWithUpperCaseTitle().subscribe(
      (postsResponse) => {
        this.posts = postsResponse;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }   
  }

}
