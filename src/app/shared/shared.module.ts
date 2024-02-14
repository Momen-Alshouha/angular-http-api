import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { InnerHeaderComponent } from './inner-header/inner-header.component';
import { FooterComponent } from './footer/footer.component';
import { NoDataAvailableComponent } from './no-data-available/no-data-available.component';

@NgModule({
  declarations: [
    NavbarComponent,
    InnerHeaderComponent,
    FooterComponent,
    NoDataAvailableComponent
  ],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports: [
    NavbarComponent,
    InnerHeaderComponent,
    FooterComponent,
    NoDataAvailableComponent
  ]
})
export class SharedModule { }
