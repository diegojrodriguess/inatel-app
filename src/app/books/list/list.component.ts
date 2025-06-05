import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { BookService } from '../../services/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [IonicModule, NgFor]
})
export class ListComponent implements OnInit {
  books: any[] = [];
  filteredBooks = this.books;
  private searchTimeout: any;

  constructor(bookService: BookService) {
    this.books = bookService.getLivros();
    this.filteredBooks = this.books;
   }

  ngOnInit() { }

  onSearch(event: any) {
    const value = event.target.value?.toLowerCase() || '';
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      if (!value) {
        this.filteredBooks = this.books;
      } else {
        this.filteredBooks = this.books.filter(book =>
          book.titulo.toLowerCase().includes(value)
        );
      }
    }, 300);
  }
}
