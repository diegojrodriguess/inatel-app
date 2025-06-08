import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { Book } from 'src/app/models/book.model';
import { BookRepository } from '../../repositories/book.repository';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { Loan } from 'src/app/models/loan.model';
import { LoanRepository } from 'src/app/repositories/loan.repository';
import { UserRepository } from 'src/app/repositories/user.repository';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [IonicModule, NgFor],
  providers: [UserRepository]
})
export class ListComponent implements OnInit {
  books: Book[] = [];
  filteredBooks = this.books;
  user: User | undefined = undefined;
  private searchTimeout: any;

  constructor(private bookRepository: BookRepository, private alertController: AlertController, private loanRepository: LoanRepository, private userRepository: UserRepository, private router: Router) {
    // this.books = bookRepository.getAll();
    this.filteredBooks = this.books;
    this.user = userRepository.getById(1); // Simulating a logged-in user
  }

  ngOnInit() {
    this.reloadData();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.router.url === '/books') {
        this.reloadData();
      }
    });
  }

  reloadData() {
    this.books = this.bookRepository.getAll();
    this.filteredBooks = this.books;
  }

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

  async presentAlert(book: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar Empréstimo',
      subHeader: 'Prazo de devolução: 14 dias',
      message: `
    Multa de R$1,00 por dia em caso de atraso.
    Você pode renovar por mais 7 dias.
  `,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            const loan = new Loan(
              book,
              this.user as User,
              new Date(),
              new Date(new Date().setDate(new Date().getDate() + 14))
            );

            this.loanRepository.add(loan);

            //diminuindo a quantidade de livros disponíveis
            book.quantidadeDisponivel--;
            this.bookRepository.update(book.id, book);

            // Atualizando a lista manualmente
            this.books = this.bookRepository.getAll();
            this.filteredBooks = this.books;

            // Log the loan confirmation
            console.log(`Empréstimo confirmado para o livro: ${book.titulo}`);

          }
        }
      ]
    });

    await alert.present();

  }
}
