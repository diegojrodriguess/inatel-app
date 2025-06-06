import { Book } from './book.model';
import { User } from './user.model';

export class Loan {
  constructor(
    public id: number,
    public book: Book,
    public user: User,
    public dataEmprestimo: Date,
    public dataDevolucao: Date
  ) {}

  validarEmprestimo(): boolean {
    // Implementação fictícia
    return true;
  }

  registrarDevolucao(): void {
    // Implementação fictícia
  }

  renovarEmprestimo(): void {
    // Implementação fictícia
  }
}