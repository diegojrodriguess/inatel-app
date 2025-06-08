// book.repository.ts
import { books } from '../shared/mocks/books.mock';
import { Book } from '../models/book.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookRepository {
  private data: Book[] = books.map(b => new Book(b.id, b.titulo, b.autor, b.nota, b.quantidade, b.disponivel));

  getAll(): Book[] {
    return this.data;
  }

  getById(id: number): Book | undefined {
    return this.data.find(book => book.id === id);
  }

  update(id: number, updatedBook: Book): void {
    const index = this.data.findIndex(book => book.id === id);
    if (index !== -1) {
      this.data[index] = updatedBook;
    }
  }
}