import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Book} from './book';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = 'api/book/books.json';
  bookList: Book[] = [];

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError((err) => throwError(err)));
  }

  /*saveNewBook(book: Book): Observable<Book> {
  return this.http.post<Book>(this.bookApi + `new`, book); // ovo nako  //

  }*/

  /*getBookById(id: number): Observable<Book> {
    return of(this.booksUrl.data.find(book => book.id === id));
  }*/

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.booksUrl)
      .pipe(
        map(data => data.find(book => book.id === id)),
        catchError((err) => throwError(err)));
  }
}

