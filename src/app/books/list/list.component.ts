import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [IonicModule, NgFor]
})
export class ListComponent implements OnInit {
  books = [
    {
      id: 1,
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      nota: 4.5,
      disponivel: 3
    },
    {
      id: 2,
      titulo: "Cem Anos de Solidão",
      autor: "Gabriel García Márquez",
      nota: 4.8,
      disponivel: 1
    },
    {
      id: 3,
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      nota: 4.2,
      disponivel: 5
    },
    {
      id: 4,
      titulo: "A Metamorfose",
      autor: "Franz Kafka",
      nota: 4.3,
      disponivel: 2
    },
    {
      id: 5,
      titulo: "Grande Sertão: Veredas",
      autor: "Guimarães Rosa",
      nota: 4.5,
      disponivel: 4
    },
    {
      id: 6,
      titulo: "1984",
      autor: "George Orwell",
      nota: 4.7,
      disponivel: 2
    },
    {
      id: 7,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      nota: 4.6,
      disponivel: 7
    },
    {
      id: 8,
      titulo: "Crime e Castigo",
      autor: "Fiódor Dostoiévski",
      nota: 4.9,
      disponivel: 1
    },
    {
      id: 9,
      titulo: "O Nome da Rosa",
      autor: "Umberto Eco",
      nota: 4.4,
      disponivel: 3
    },
    {
      id: 10,
      titulo: "O Apanhador no Campo de Centeio",
      autor: "J.D. Salinger",
      nota: 4.1,
      disponivel: 5
    },
    {
      id: 11,
      titulo: "Ensaio Sobre a Cegueira",
      autor: "José Saramago",
      nota: 4.6,
      disponivel: 2
    },
    {
      id: 12,
      titulo: "Orgulho e Preconceito",
      autor: "Jane Austen",
      nota: 4.5,
      disponivel: 6
    },
    {
      id: 13,
      titulo: "A Revolução dos Bichos",
      autor: "George Orwell",
      nota: 4.3,
      disponivel: 4
    },
    {
      id: 14,
      titulo: "Os Miseráveis",
      autor: "Victor Hugo",
      nota: 4.8,
      disponivel: 2
    },
    {
      id: 15,
      titulo: "O Processo",
      autor: "Franz Kafka",
      nota: 4.4,
      disponivel: 1
    }
  ];
  filteredBooks = this.books;
  private searchTimeout: any;

  constructor() { }

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
}
