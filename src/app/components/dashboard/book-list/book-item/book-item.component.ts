import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../../models/book';
import {MessengerService} from '../../../../services/messenger.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})


export class BookItemComponent implements OnInit {

  @Input() book: Book;

  constructor(private msgService: MessengerService) {
  }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.msgService.sendMsg(this.book);
  }

}
