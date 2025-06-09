import { Book } from './book.model';
import { User } from './user.model';

let nextLoanId = 1;

export class Loan {
  public id: number;
  public devolvido: boolean = false;
  public dataDevolucaoReal?: Date;
  public multaPaga: boolean = false;
  public multaCalculada: number = 0;

  constructor(
    book: Book,
    user: User,
    public dataEmprestimo: Date,
    public dataDevolucao: Date
  ) {
    this.id = nextLoanId++;
    this.book = book;
    this.user = user;
  }

  book: Book;
  user: User;

  get multa(): number {
    if (!this.devolvido) {
      const hoje = new Date();
      const diffTime = hoje.getTime() - this.dataEmprestimo.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 14 ? diffDays - 14 : 0;
    }
    return this.multaCalculada;
  }
}