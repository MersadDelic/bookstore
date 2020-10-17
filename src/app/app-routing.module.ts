import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthorComponent} from './Author/author/author.component';
import {BookComponent} from './Book/book/book.component';
import {PublisherComponent} from './Publisher/publisher/publisher.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'bookList', component: BookComponent},
  {path: 'publisher', component: PublisherComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
