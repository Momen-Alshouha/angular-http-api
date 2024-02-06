import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './posts/post/post.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PhotosComponent } from './photos/photos.component';
import { UserCardComponent } from './users/user-card/user-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/:id', component: UserCardComponent },
  { path: 'users', component: UserComponent },
  { path: 'posts', component: PostComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'photos', component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
