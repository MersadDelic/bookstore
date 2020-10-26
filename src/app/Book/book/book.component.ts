import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Author} from '../../Author/author';
import {AuthorService} from '../../Author/author.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService, private authorService: AuthorService) {
  }

  book: Book = new Book();
  bookList: Book[];
  authorId: number;
  authorList: Author[] = [];

  /*
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


    ];*/

  ngOnInit(): void {


    this.getBookList();
    this.getAuthors();

  }

  getAuthors(): void {
    this.authorService.getAllAuthors().subscribe(
      res => {
        this.authorList = res;
      },
      error1 => console.log(error1)
    );
  }

  getBookList(): void {
    this.bookService.getAllBooks().subscribe(
      res => {
        this.bookList = res;
      },
      error1 => console.log(error1)
    );
  }


  saveBook(): void {
    this.book.authorName = this.authorId;
    this.bookService.saveNewBook(this.book)
      .subscribe(
        createdBook => {
          this.book = createdBook;
          console.log(createdBook);
        },
        error => console.log(error),
      );

  }
}
