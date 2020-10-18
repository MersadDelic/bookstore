import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'api/book/books.json';

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Subscription {
    return this.http.get(this.booksUrl)
      .subscribe(
        data => console.log('Lista knjiga: ' + JSON.stringify(data)),
        error => console.log('Greska pri prikazu knjiga: ' + error));
    /* .pipe(
       tap(data => console.log('All: ' + JSON.stringify(data))),
       catchError(this.handleError)*/
  }


  /*private handleError(err: HttpErrorResponse): Observable <never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
    console.error(errorMessage);
    return throwError(errorMessage);
  }*/
}
