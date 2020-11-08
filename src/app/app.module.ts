import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthorComponent} from './Author/author/author.component';
import {PublisherComponent} from './Publisher/publisher/publisher.component';
import {BookComponent} from './Book/book/book.component';
import {HttpClientModule} from '@angular/common/http';
import {BookdetailsComponent} from './Book/bookdetails/bookdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AuthorComponent,
    PublisherComponent,
    BookComponent,
    BookdetailsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
