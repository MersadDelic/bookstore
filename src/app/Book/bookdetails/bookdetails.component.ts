import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../services/book.service';
import {Subscription} from 'rxjs';
import {AuthorService} from '../../services/author.service';
import {Author} from '../../models/author';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  book: Book;
  author: Author;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private authorService: AuthorService) {
  }

  ngOnInit(): void {
    this.getBookById();
  }

  getBookById(): Subscription {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.bookService.getBookById(id).subscribe(book => this.book = book);
  }

  getAuthorId(): void {
    this.authorService.getAuthor(this.book.author.id).subscribe(
      data => this.author = data,
      error => console.log(error)
    );
  }
}
