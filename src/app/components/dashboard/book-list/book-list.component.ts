import {Component, OnInit} from '@angular/core';
import {Book} from '../../../models/book';
import {BookService} from '../../../services/book.service';
import {Author} from '../../../models/author';
import {AuthorService} from '../../../services/author.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  book: Book = new Book(); // kreiraj praznu knjiga ( u konstruktoru dodijeljujemo praznog autora)
  bookList: Book[] = [];
  authorList: Author[] = [];
  author: Author = new Author();

  constructor(private bookService: BookService, private authorService: AuthorService,
              private location: Location, private router: Router) {
  }

  /*selecetdFile: File;
  onFileUpload(event) {
    this.selecetdFile = event.target.files[0];
  }
  OnUploadFile() {
/!*!//Upload file here send a binary data*!/
    this.bookService.uploadImage(this.selecetdFile).subscribe(
      createdImage => {
        this.book-list.push(createdImage);
      },
      err => console.log(err));
  }*/

  ngOnInit(): void {
    this.getBookList();
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

  saveBook(): any {
    /* const book-list = new Book();
     book-list.title = this.bookForm.value.title;
     book-list.price = this.bookForm.value.price;*/
    this.bookService.saveBook(this.book).subscribe(
      createdBook => {
        this.bookList.push(createdBook);
      },
      err => console.log(err));
  }

  saveAuthor(): void {
    this.authorService.createAuthor(this.author)
      .subscribe(
        createdAuthor => this.authorList.push(createdAuthor),
        error => console.log(error));
  }

  deleteBook(id: number): void {
    if (confirm('Are you sure to delete this book-list ?')) {
      this.bookService.deleteBook(id)
        .subscribe(res => {
            this.bookList = this.bookList.filter(item => item.id !== id);
            console.log('obrisana knjiga');
          },
          err => console.log(err));
    }
  }

}

  /* getAuthor(authorId: number): Author {
     return this.authorList.find(a => a.id === authorId);
   }*/
