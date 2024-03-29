import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Book} from '../models/book';
import {catchError, tap} from 'rxjs/operators';
import {Author} from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // private booksUrl = 'http://localhost:8080/api/book';
  private booksUrl = 'http://localhost:3000/books';

  /*  bookList: Book[] = [];
    book-list: Book;
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };*/

  constructor(private http: HttpClient) {
  }

  getBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        tap(data => console.log(data)),
        catchError((err) => throwError(err)));
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

  /* uploadImage(imageName: string): void {
     return this.http.post(this.booksUrl + `/upload` )
   }*/

}

