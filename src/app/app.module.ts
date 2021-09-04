import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthorComponent} from './Author/author/author.component';
import {PublisherComponent} from './Publisher/publisher/publisher.component';
import {BookListComponent} from './components/dashboard/book-list/book-list.component';
import {HttpClientModule} from '@angular/common/http';
import {BookdetailsComponent} from './Book/bookdetails/bookdetails.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {HeaderComponent} from './components/shared/header/header.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {NavComponent} from './components/shared/nav/nav.component';
import {CategoriesComponent} from './components/dashboard/categories/categories.component';
import {CartComponent} from './components/dashboard/cart/cart.component';
import {CartItemComponent} from './components/dashboard/cart/cart-item/cart-item.component';
import {BookItemComponent} from './components/dashboard/book-list/book-item/book-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AuthorComponent,
    PublisherComponent,
    BookListComponent,
    BookdetailsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CategoriesComponent,
    CartComponent,
    CartItemComponent,
    BookItemComponent

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
