export class Book {
  id?: number;
  ISBN?: string;
  publisherName?: string;
  year?: number;
  title: string;
  price?: string;
  description?: string;
  imageName?: string;
  author: any;

  constructor() {
    this.author = {};  // dodijeli praznog autora
  }

}
