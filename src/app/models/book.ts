import {Author} from './author';

export class Book {
  id?: number;
  ISBN?: string;
  publisherName?: string;
  year?: number;
  title: string;
  price?: string;
  description?: string;
  imageName?: string;
  author?: Author;

  constructor() {
    this.author = {address: '', name: ''};  // dodijeli praznog autora
  }

}
