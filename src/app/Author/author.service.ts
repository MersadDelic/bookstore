import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Author} from './author';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {
  }

  private AUTHOR_API = 'api/author/authors.json';


  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.AUTHOR_API)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError((err) => throwError(err)));
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.AUTHOR_API, author);
  }
}

