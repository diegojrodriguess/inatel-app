import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan.model';
import { LoanRepository } from 'src/app/repositories/loan.repository';
import { IonicModule } from '@ionic/angular';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BookRepository } from 'src/app/repositories/book.repository';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss'],
  imports: [IonicModule, NgFor, NgIf, CommonModule],
})
export class LoansComponent implements OnInit {
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
    this.loans = this.loanRepository.getActiveLoansByUserId(1);
  }

  diasRestantes(loan: Loan): number {
    const hoje = new Date();
    const diffTime = loan.dataDevolucao.getTime() - hoje.getTime();
    return Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
  }

  async renovarEmprestimo(loan: Loan) {
    const alert = await this.alertController.create({
      header: 'Confirmar Renovação',
      message: `
      Tem certeza que deseja renovar o empréstimo do livro "${loan.book.titulo}" por mais 7 dias?
      `,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            const days = 7;
            loan.dataEmprestimo = new Date(loan.dataEmprestimo.getTime() + days * 24 * 60 * 60 * 1000);
            loan.dataDevolucao = new Date(loan.dataDevolucao.getTime() + days * 24 * 60 * 60 * 1000);
            this.loanRepository.update(loan.id, loan);
            this.reloadData();
          }
        }
      ]
    });

    await alert.present();
  }

  async devolverLivro(loan: Loan) {
    const alert = await this.alertController.create({
      header: 'Confirmar Devolução',
      message: `
      Tem certeza que deseja devolver o livro "${loan.book.titulo}"?
      ${loan.multa > 0 ? `\n\nMulta pendente: R$${loan.multa},00` : ''}
      `,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            // Devolve o livro
            this.loanRepository.devolverLivro(loan.id);
            
            // Atualiza a quantidade do livro
            const book = loan.book;
            book.quantidade++;
            this.bookRepository.update(book.id, book);
            
            this.reloadData();
          }
        }
      ]
    });

    await alert.present();
  }
}
