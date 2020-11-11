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

  // nova knjiga
  book: Book = new Book();
  // selectedAuthorId: number;  -- izmijenili smo. pogledaj book.component.html liniju 74

  // sve knjige (tabela)
  bookList: Book[];

  authorList: Author[] = [];
  author: Author = new Author();

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
      error => console.log(error)
    );
  }

  saveBook(): void {
    // this.book.authorId = this.selectedAuthorId;  // pogledaj book.component.html liniju 74
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

  // vrati autora na osnovu authorId - i u html ako hoces ispisati ime autora, pozoves samo getAuthor(id).name itd...
  getAuthor(authorId: number): Author {
    let a: Author;
    this.authorService.getAuthor(authorId)
      .subscribe(
        author => a = author as Author,
        error => {
          console.log('id autora: ' + authorId);
          console.log('greska pri dobavljanju autora id:' + error.error);
        }
      );
    return a;
  }

  // !!! PROJVERI ZASTO NE RADI KAD SE KORISTI GORNJA METODA !!!

  /* posto si vec dobavio sve autore na pocektu (za potrebe modala kada biras autora)
     umjesto da zoves api, mozes samo filtrirati listu dobavljenih autora na osnovu authorId
   */

  getAuthor_v2(authorId: number): Author {
    return this.authorList.find(a => a.id === authorId);
  }
}

