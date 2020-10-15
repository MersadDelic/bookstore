import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AuthorComponent } from './Author/author/author.component';
import { PublisherComponent } from './Publisher/publisher/publisher.component';
import { BookComponent } from './Book/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AuthorComponent,
    PublisherComponent,
    BookComponent
  ],
    imports: [
      BrowserModule,
      FormsModule,
      RouterModule,
      AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
