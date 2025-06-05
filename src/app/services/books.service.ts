import { Injectable } from '@angular/core';
import { books } from '../shared/mocks/books.mock';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private listaLivros = books;

    getLivros() {
        return this.listaLivros;
    }

    alugarLivro(id: number): boolean {
        const livro = this.listaLivros.find(l => l.id === id);
        if (livro && livro.disponivel > 0) {
            livro.disponivel--;
            return true;
        }
        return false;
    }
}
