import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Book} from './book';
import {catchError, map, tap} from 'rxjs/operators';
import {Author} from '../Author/author';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'http://localhost:9090/api/book';

  /*  bookList: Book[] = [];
    book: Book;
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };*/

  constructor(private http: HttpClient) {
  }

  getBookList(): Observable<any | Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        map(data => {
          const books: Book[] = [];
          data.forEach(book => {
            books.push(Book.fromJSON(book));
          });
          return books as Book[];
        }),
        catchError((err) => throwError(err))
      );
  }

  saveBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book)
      .pipe(
        tap(data => console.log(data)),
        catchError((err) => throwError(err))
      );
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.booksUrl + `/${id}`)
      .pipe(
        map(data => {
          return Book.fromJSON(data);
        }),
        catchError((err) => throwError(err))
      );
  }

  deleteBook(id: number): Observable<Author> {
    return this.http.delete<Author>(this.booksUrl + `/${id}`)
      .pipe(
        tap(data => console.log(data)),
        catchError((err) => throwError(err))
      );
  }
}

