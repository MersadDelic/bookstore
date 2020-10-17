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
        author_name: 'Mato Lovrak',
        title: 'Vlak u snijegu'
      },
      {
        author_name: 'Mak Dizdar',
        title: 'Kameni spavač'
      },
      {
        author_name: 'Zapisi o gradovima',
        title: 'Ćamil Sijarić'
      },
      {
        author_name: 'Lewis Carroll',
        title: 'Alisa u zemlji čuda '
      },


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
