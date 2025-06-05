import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgFor, NgIf, NgClass } from '@angular/common';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
  imports: [IonicModule, NgFor, NgIf, NgClass]
})
export class ClassesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  classes = [
    {
      id: 1,
      disciplina: "S05 - Interface Homem-máquina",
      data: "ter",
      horario: "10:00",
      local: "Prédio 1, Sala 17",
      prova_alert: false,
      prova: "12/05",
      frequencia: "10/25",
      nota: 9
    },
    {
      id: 2,
      disciplina: "E01 - Circuitos Elétricos em Corrente Contínua",
      data: "ter",
      horario: "10:00",
      local: "Prédio 1, Sala 17",
      prova_alert: true,
      prova: "12/05",
      frequencia: "10/25",
      nota: 5
    },
    {
      id: 3,
      disciplina: "M02 - Álgebra e Geometria Analítica",
      data: "ter",
      horario: "10:00",
      local: "Prédio 1, Sala 17",
      prova_alert: true,
      prova: "12/05",
      frequencia: "10/25",
      nota: 7
    }
  ];

}
