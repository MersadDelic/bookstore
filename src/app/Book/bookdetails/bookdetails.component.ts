import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
   book: Book;

  constructor(private route: ActivatedRoute,
              private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getBookById();
  }

  getBookById(): Subscription {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.bookService.getBookById(id).subscribe(book => this.book = book);
  }
}
