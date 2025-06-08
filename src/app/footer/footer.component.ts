import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IonicModule]
})
export class FooterComponent  implements OnInit {
  selected = '/${this.selected}';

  constructor(private router: Router) { }

  ngOnInit() {}

  onSegmentChange(event: any) {
    this.selected = event.detail.value;
    if (this.selected === 'home') {
      this.router.navigate(['/main']);
    } else {
      this.router.navigate([`/${this.selected}`]);
    }
  }
}
