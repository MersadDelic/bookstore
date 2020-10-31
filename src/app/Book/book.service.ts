import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Book} from './book';
import {catchError, tap} from 'rxjs/operators';
import {Author} from '../Author/author';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'http://localhost:3000/books';

  bookList: Book[] = [];
  book: Book;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        tap(data => console.log(data)),
        catchError((err) => throwError(err)));
  }


  saveBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, JSON.stringify(book), this.httpOptions)
      .pipe(
        /*tap(data => console.log(data)),*/
        catchError((err) => throwError(err))
      );
  }


  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.booksUrl + `/${id}`)
      .pipe(
        tap(book => console.log('Dobavili ste knjigu: ' + book.title + ' autora ' + book.authorName)),
        catchError((err) => throwError(err))
      );
  }

  deleteBook(id: number): Observable<Author> {
    return this.http.delete<Author>(this.booksUrl + `/${id}`, this.httpOptions)
      .pipe(
        tap(data => console.log(data)),
        catchError((err) => throwError(err))
      );
  }
}

