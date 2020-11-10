import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Author} from '../../Author/author';
import {AuthorService} from '../../Author/author.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService, private authorService: AuthorService,
              private location: Location, private router: Router) {
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
    this.authorService.getAuthorList()
      .subscribe(res => {
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
        },
        error => console.log(error),
      );

  }

  saveAuthor(): void {
    this.authorService.createAuthor(this.author)
      .subscribe(
        createdAuthor => this.authorList.push(createdAuthor),
        error => console.log(error));
  }


  deleteBook(id: number): void {
    if (confirm('Are you sure to delete this book ?')) {
      this.bookService.deleteBook(id)
        .subscribe(res => {
            this.getBookList();
            console.log('obrisano');
          },
          err => console.log(err));
    }
  }
}

