import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Author} from '../models/author';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  author: Author;

  /*httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };*/

  constructor(private http: HttpClient) {
  }

  // private authorsUrl = 'http://localhost:8080/api/author';
  private authorsUrl = 'http://localhost:3000/authors';

  getAuthorList(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl)
      .pipe(
        tap(data => console.log(data)),
        catchError((err) => throwError(err)));
  }

  getAuthor(id: number): Observable<Author> {
    return this.http.get<Author>(this.authorsUrl + `/${id}`)
      .pipe(
        tap(data => console.log('dobavljen autor: ' + JSON.stringify(data))),
        catchError((err) => throwError(err))
      );
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.authorsUrl, author)
      .pipe(
        tap(data => console.log(data)),
        catchError((err) => throwError(err))
      );
  }

  deleteAuthor(id: number): Observable<Author> {
    return this.http.delete<Author>(this.authorsUrl + `/${id}`)
      .pipe(
        tap(data => console.log(data)),
        catchError((err) => throwError(err))
      );
  }


}

