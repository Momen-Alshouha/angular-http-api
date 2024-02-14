import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/user/user.component';
import { UserCardComponent } from './users/user-card/user-card.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostComponent } from './posts/post/post.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { SharedModule } from './shared/shared.module';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserCardComponent,
    HomeComponent,
    PostDetailsComponent,
    PostComponent,
    PhotosComponent,
    PhotoComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
