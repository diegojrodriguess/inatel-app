import { Book } from 'src/app/models/book.model';
import { Loan } from '../../models/loan.model';
import { BookRepository } from 'src/app/repositories/book.repository';
import { UserRepository } from 'src/app/repositories/user.repository';
import { User } from 'src/app/models/user.model';
export const loans = [
    new Loan(
        new BookRepository().getById(1) as Book,
        new UserRepository().getById(1) as User,
        new Date('2025-05-18'),
        new Date()
    )
]