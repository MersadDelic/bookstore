export class Book {
  id?: number;
  ISBN?: string;
  publisherName?: string;
  year?: number;
  title: string;
  price?: string;
  description?: string;
  imageName?: string;
  author?: {id: number};  // ovo smo u backendu promijenili - da vraca samo id autora

  constructor() {
    this.author = {id: null};
  }

  static fromJSON(json: any): Book {
    const book = Object.create(Book.prototype);
    return Object.assign(book, json, {
      author: {id: json.author.id}
    });
  }
}
