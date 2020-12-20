export class Book {
  id?: number;
  ISBN?: string;
  publisherName?: string;
  year?: number;
  title: string;
  price?: string;
  description?: string;
  imageName?: string;
  author: any; // najbolje ovako staviti - da ne moras mijenjati ako na backendu promijenis
  // sad sa backenda saljemo author: { id: number, name: string }
  // ako promijenimo na backendu, npr posaljemo jos jedan param, ovo ce opet biti ok

  constructor() {
    this.author = {};  // dodijeli praznog autora
  }

}
