import {Component, OnInit} from '@angular/core';
import {Author} from '../author';
import {AuthorService} from '../author.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authorList: Author[] = [];
  author: Author = new Author();
  authorForm: FormGroup;
  showModal: any;

  constructor(private authorService: AuthorService, private router: Router) {

    this.authorForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(): void {
    this.authorService.getAuthorList()
      .subscribe(res => {
          this.authorList = res;
        },
        error1 => console.log(error1)
      );
  }

  /*saveAuthor(): void {
    this.authorService.createAuthor(this.author)
      .subscribe(
        createdAuthor => this.authorList.push(createdAuthor),
        error => console.log(error));
  }*/

  saveAuthor(): any {
    /*const author = new Author();
    author.name = this.authorForm.value.name;
    author.address = this.authorForm.value.address;*/

    this.authorService.createAuthor(this.author).subscribe(
      createdAuthor => {
        this.authorList.push(createdAuthor);
      },
      err => console.log(err));
  }

  deleteAuthor(id: number): void {
    if (confirm('Are you sure to delete this author ?')) {
      this.authorService.deleteAuthor(id)
        .subscribe(
          data => {
            this.getAuthors();
            console.log('successfully deleted author with id: ' + id);
          },
          err => console.log(err));
    }
  }
}
