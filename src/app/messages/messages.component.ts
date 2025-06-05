import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  imports: [IonicModule, NgFor]
})
export class MessagesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  messages = [
    { texto: 'Você possui um armário reservado com entrega para hoje.', lida: false },
    { texto: 'Você possui uma pendência no financeiro...', lida: true },
  ];    
}
