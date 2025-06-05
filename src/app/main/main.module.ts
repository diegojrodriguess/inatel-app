import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ClassesComponent } from '../classes/classes.component';
import { MessagesComponent } from '../messages/messages.component';
import { NewsComponent } from '../news/news.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    HeaderComponent,
    FooterComponent,
    ClassesComponent,
    MessagesComponent,
    NewsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MainPage]
})
export class MainPageModule {}
