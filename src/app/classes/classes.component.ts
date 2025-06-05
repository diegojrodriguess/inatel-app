import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
  imports: [IonicModule, NgFor]
})
export class ClassesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  classes = [
    { disciplina: 'Matemática', sala: 'Prédio 1, Sala 5', horario: '08:00 - 09:40' },
    { disciplina: 'Física', sala: 'Prédio 2, Sala 15', horario: '10:00 - 11:40' },
    { disciplina: 'Eletrônica Digital', sala: 'Pŕedio 3, Sala 2', horario: '13:00 - 14:40' }
  ];

}
