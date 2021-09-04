import {Component, OnInit} from '@angular/core';
import {MessengerService} from '../../../services/messenger.service';
import {Book} from '../../../models/book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private msgService: MessengerService) {
  }

  cartItems = [];
  cartTotal: number;
  bookExist: boolean;

  ngOnInit(): void {

    this.msgService.getMsg().subscribe((book: Book) => {
      this.addBookToCart(book);
    });
  }

  addBookToCart(book: Book): void {
    /*  if (this.cartItems.length === 0) {
      this.cartItems.push({
        bookId: book.id,
        bookName: book.title,
        price: book.price,
        quantity: 1
      });
    } else {
      for (const i in this.cartItems){
        if (this.cartItems[i].bookId === book.id){
          this.cartItems[i].quantity++;
          break;
        }
        else {
          this.cartItems.push({
            bookId: book.id,
            bookName: book.title,
            price: book.price,
            quantity: 1
          });
      }
    }
      }*/

    this.bookExist = false;
    for (const i in this.cartItems) {
      if (this.cartItems[i].bookId === book.id) {
        this.cartItems[i].quantity++;
        this.bookExist = true;
        break;
      }
    }
    if (!this.bookExist) {
      this.cartItems.push({
        bookId: book.id,
        bookName: book.title,
        price: book.price,
        quantity: 1
      });
    }


    this.cartTotal = 0;
    this.cartItems.forEach(cartItem => {
      this.cartTotal += (cartItem.quantity * cartItem.price);
    });
  }
}
