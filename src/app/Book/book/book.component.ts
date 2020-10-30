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
  author: Author = new Author();

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
    this.authorService.getAuthorList().subscribe(
      res => {
        this.authorList = res;
      },
      error1 => console.log(error1)
    );
  }

  getBookList(): void {
    this.bookService.getBookList().subscribe(
      res => {
        this.bookList = res;
      },
      error1 => console.log(error1)
    );
  }


  saveBook(): void {
    this.book.authorName = this.authorId;
    this.bookService.saveBook(this.book)
      .subscribe(
        createdBook => {
          this.bookList.push(createdBook);
          console.log(createdBook);
        },
        error => console.log(error),
      );

  }

  saveAuthor(): void {
    this.authorService.createAuthor(this.author)
      .subscribe(
        createdAuthor => this.authorList.push(createdAuthor),
        error => console.log(error));
    window.location.reload(false);
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log('Successfully deleted author with id =' + `/${id}`);
        },
        err => console.log(err));
  }

}

