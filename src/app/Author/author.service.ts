import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Author} from './author';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  author: Author;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  private authorsUrl = 'http://localhost:3000/authors';


  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl)
      .pipe(
        tap(data => console.log(data)),
        catchError((err) => throwError(err)));
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.authorsUrl, author, this.httpOptions)
      .pipe(
        tap(data => console.log(data)),
        catchError((err) => throwError(err))
      );
  }
}

