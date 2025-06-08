import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { Book } from 'src/app/models/book.model';
import { BookRepository } from '../../repositories/book.repository';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [IonicModule, NgFor],
  providers: [BookRepository]
})
export class ListComponent implements OnInit {
  books: Book[] = [];
  filteredBooks = this.books;
  private searchTimeout: any;

  constructor(private bookRepository: BookRepository, private alertController: AlertController) {
    this.books = bookRepository.getAll();
    this.filteredBooks = this.books;
  }

  ngOnInit() { }

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
            console.log(`Empréstimo confirmado para o livro: ${book.titulo}`);
          }
        }
      ]
    });

    await alert.present();

  }
}
