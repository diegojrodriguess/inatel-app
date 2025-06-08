import { Book } from './book.model';
import { User } from './user.model';

export class Library {
    constructor(
        public id: number,
        public nome: string,
        public endereco: string,
        public livros: Book[]
    ) { }
}