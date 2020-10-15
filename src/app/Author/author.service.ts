import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Author} from '../Author/author'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }
}

 private AUTHOR_API = '/api/author';


  createAuthor(author: Author): Observable<Author> {
  return this.http.post<Author>(this.AUTHOR_API, author);
}
}
