import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { UserRepository } from 'src/app/repositories/user.repository';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [IonicModule],
  providers: [UserRepository]
})
export class CardComponent implements OnInit {
  user: User | undefined = undefined;
  constructor(private userRepository: UserRepository) {
    this.user = userRepository.getById(1);
  }
  
  ngOnInit() { }
}
