import {Injectable} from '@angular/core';
import {Book} from './book';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book: Book[] = [];

  constructor(private http: HttpClient) {
  }

}


