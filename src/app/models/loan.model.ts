import { Book } from './book.model';
import { User } from './user.model';

let nextLoanId = 1;

export class Loan {
  public id: number;

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
    const diffTime = this.dataDevolucao.getTime() - this.dataEmprestimo.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 14 ? diffDays - 14 : 0;
  }
}