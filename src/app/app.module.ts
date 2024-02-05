import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/user/user.component';
import { UserCardComponent } from './users/user-card/user-card.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostComponent } from './posts/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserCardComponent,
    UserDetailsComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PostDetailsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
