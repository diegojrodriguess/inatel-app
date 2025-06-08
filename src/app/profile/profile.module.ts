import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { CardComponent } from './card/card.component';
import { LoansComponent } from './loans/loans.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    CardComponent,
    LoansComponent
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
