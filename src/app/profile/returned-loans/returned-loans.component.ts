import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Loan } from 'src/app/models/loan.model';
import { LoanRepository } from 'src/app/repositories/loan.repository';
import { BookRepository } from 'src/app/repositories/book.repository';

@Component({
  selector: 'app-returned-loans',
  templateUrl: './returned-loans.component.html',
  styleUrls: ['./returned-loans.component.scss'],
  imports: [IonicModule, NgFor, NgIf, CommonModule],
})
export class ReturnedLoansComponent implements OnInit {
  loans: Loan[] = [];

  constructor(
    private loanRepository: LoanRepository,
    private bookRepository: BookRepository,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.reloadData();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.router.url === '/profile') {
        this.reloadData();
      }
    });
  }

  reloadData() {
    this.loans = this.loanRepository.getReturnedLoansByUserId(1);
  }

  async reemprestarLivro(loan: Loan) {
    const alert = await this.alertController.create({
      header: 'Confirmar Novo Empréstimo',
      message: `
      Tem certeza que deseja alugar o livro "${loan.book.titulo}" novamente?
      `,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            // Verifica se o livro está disponível
            if (loan.book.quantidade > 0) {
              // Cria novo empréstimo
              const novoEmprestimo = new Loan(
                loan.book,
                loan.user,
                new Date(),
                new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 14 dias
              );
              
              // Atualiza quantidade do livro
              loan.book.quantidade--;
              this.bookRepository.update(loan.book.id, loan.book);
              
              // Adiciona novo empréstimo
              this.loanRepository.add(novoEmprestimo);
              
              this.reloadData();
            } else {
              this.alertController.create({
                header: 'Livro Indisponível',
                message: 'Este livro não está disponível no momento.',
                buttons: ['OK']
              }).then(alert => alert.present());
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
