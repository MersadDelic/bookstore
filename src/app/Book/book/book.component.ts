import {Component, OnInit} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() {
  }

  // HARDKODIRANE KNJIGE //
  bookList: Book[] =
    [
      {
        id: 1,
        title: 'Dolina Vukova'
      },
      {
        id: 2,
        title: 'Vlak u snijegu'
      }
    ];

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList(): Book[] {
    return this.bookList;
  }

  /* getAvailableBooks(): Book[] {
     return this.bookService.getBookList();*/
}
