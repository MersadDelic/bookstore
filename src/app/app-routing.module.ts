import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthorComponent} from './Author/author/author.component';
import {BookComponent} from './Book/book/book.component';
import {BookdetailsComponent} from './Book/bookdetails/bookdetails.component';

const routes: Routes = [
  {path: '', component: DashboardComponent}, // treba HomeComponent//
  {path: 'dashboard', component: DashboardComponent},
  {path: 'authorList', component: AuthorComponent},
  {path: 'bookList', component: BookComponent},
  {path: 'bookList/:id', component: BookdetailsComponent},
  /* {path: 'publisher', component: PublisherComponent},*/

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
