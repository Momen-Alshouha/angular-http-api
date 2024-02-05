import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './posts/post/post.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UserComponent },
  { path: 'posts', component: PostComponent },
  { path: 'post/:id', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
