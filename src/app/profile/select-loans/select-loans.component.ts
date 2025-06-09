import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoansComponent } from '../loans/loans.component';
import { ReturnedLoansComponent } from '../returned-loans/returned-loans.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-loans',
  templateUrl: './select-loans.component.html',
  styleUrls: ['./select-loans.component.scss'],
  imports: [IonicModule, LoansComponent, ReturnedLoansComponent, FormsModule, CommonModule],
})
export class SelectLoansComponent  implements OnInit {
  selectedSegment: string = 'active';

  constructor() { }

  ngOnInit() {}

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

}
