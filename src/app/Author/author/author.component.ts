import {Component, OnInit} from '@angular/core';
import {Author} from '../author';
import {AuthorService} from '../author.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authorList: Author[] = [];
  author: Author = new Author();

  constructor(private authorService: AuthorService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(): void {
    this.authorService.getAuthorList().subscribe(
      res => {
        this.authorList = res;
      },
      error1 => console.log(error1)
    );
  }

  saveAuthor(): void {
    this.authorService.createAuthor(this.author)
      .subscribe(
        createdAuthor => this.authorList.push(createdAuthor),
        error => console.log(error));
  }

  editAuthor(): void {
  }


  deleteAuthor(id: number): void {
    this.authorService.deleteAuthor(id)
      .subscribe(
        data => {
          window.location.reload();
        },
        err => console.log(err));
  }

  /*this.authorService.deleteAuthor(id)
    .subscribe(
      deletedAuthor => this.authorList.splice(deletedAuthor),
      error => console.log(error));*/
}
