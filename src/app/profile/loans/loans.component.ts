import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan.model';
import { LoanRepository } from 'src/app/repositories/loan.repository';
import { IonicModule } from '@ionic/angular';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss'],
  imports: [IonicModule, NgFor, NgIf, CommonModule],
})
export class LoansComponent implements OnInit {
  loans: Loan[] = [];
  constructor(private loanRepository: LoanRepository, private router: Router) {
  }

  ngOnInit() {
    console.log(this.loans);

    this.reloadData();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.router.url === '/profile') {
        this.reloadData();
      }
    }); 
  }

  reloadData(){
    this.loans = this.loanRepository.getLoansByUserId(1);
  }

  diasRestantes(loan: Loan): number {
    const hoje = new Date();
    const diffTime = loan.dataDevolucao.getTime() - hoje.getTime();
    return Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
  }
}
