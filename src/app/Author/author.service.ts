import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Author} from './author';
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

  private authorsUrl = 'http://localhost:8080/api/author';

  getAuthorList(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl)
      .pipe(
        tap(data => console.log(data)),
        catchError((err) => throwError(err)));
  }

  getAuthor(id: number): Observable<Author> {

  /*  console.log('dobavljam autora id: ' + id);*/

    return this.http.get<Author>(this.authorsUrl + `/${id}`)
      .pipe(
        tap(data => console.log('dobavljen autor: ' + JSON.stringify(data)),
          err => console.error('reska pri dobavljanju autora sa id: ' + id)),
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

