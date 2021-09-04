import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthorComponent} from './Author/author/author.component';
import {BookListComponent} from './components/dashboard/book-list/book-list.component';
import {BookdetailsComponent} from './Book/bookdetails/bookdetails.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'authorList', component: AuthorComponent},
  {path: 'bookList', component: BookListComponent},
  {path: 'bookList/:id', component: BookdetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

