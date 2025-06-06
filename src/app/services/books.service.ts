import { Injectable } from '@angular/core';
import { books } from '../shared/mocks/books.mock';
import { Book } from '../models/book.model';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private listaLivros: Book[] = books.map(
        b => new Book(b.id, b.titulo, b.autor, b.nota, b.quantidade, b.disponivel)
    );

    getLivros(): Book[] {
        return this.listaLivros;
    }

    alugarLivro(id: number): boolean {
        const livro = this.listaLivros.find(l => l.id === id);
        if (livro && livro.quantidade > 0) {
            livro.quantidade--;
            return true;
        }
        return false;
    }
}
