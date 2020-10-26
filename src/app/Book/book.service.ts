import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Book} from './book';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = 'api/book/books.json';
  private bookApi = 'api/book/book.json';
  bookList: Book[] = [];
  book: Book;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError((err) => throwError(err)));
  }

  saveNewBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, +JSON.stringify(book), this.httpOptions)
      .pipe(
        tap(data => console.log(data)),
        catchError((err) => throwError(err))
      );
  }


  getBookById(id: number): Observable<Book> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        map((books: Book[]) => books.find(book => book.id === id)),
        catchError((err) => throwError(err)));
  }
}

