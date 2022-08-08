import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  books: any;
  bookService: BooksService;

  constructor(bookService: BooksService) {
    this.bookService = bookService;
   }

  ngOnInit(): void {
    this.books = this.bookService.getBook().subscribe((data => {
      this.books = data;
    }));
  }

}
