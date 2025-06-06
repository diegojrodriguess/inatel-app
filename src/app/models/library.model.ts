import { Book } from './book.model';
import { User } from './user.model';

export class Biblioteca {
    constructor(
        public id: number,
        public nome: string,
        public endereco: string,
        public livros: Book[]
    ) { }

    buscarLivro(titulo: string): Book | undefined {
        return this.livros.find(book => book.titulo === titulo);
    }

    registrarEmprestimo(book: Book, user: User): void {
        // Implementação fictícia
    }
}