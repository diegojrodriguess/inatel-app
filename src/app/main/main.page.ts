import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: false,
})
export class MainPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  messages = [
    { texto: 'Você possui um armário reservado com entrega para hoje.', lida: false },
    { texto: 'Você possui uma pendência no financeiro...', lida: true },
  ];  

  classes = [
    { disciplina: 'Matemática', sala: 'Prédio 1, Sala 5', horario: '08:00 - 09:40' },
    { disciplina: 'Física', sala: 'Prédio 2, Sala 15', horario: '10:00 - 11:40' },
    { disciplina: 'Eletrônica Digital', sala: 'Pŕedio 3, Sala 2', horario: '13:00 - 14:40' }
  ];

  events = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '12/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '12/01',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '18/05',
        time: '19:00',
        location: 'Área Esportiva do Inatel',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '04/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

  currentEventIndex = 0;

  slidePrev() {
    if (this.currentEventIndex > 0) {
      this.currentEventIndex--;
    }
  }

  slideNext() {
    if (this.currentEventIndex < this.events.length - 1) {
      this.currentEventIndex++;
    }
  }

}
