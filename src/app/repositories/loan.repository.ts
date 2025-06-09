import { Loan } from "../models/loan.model";
import { loans } from "../shared/mocks/loans.mock";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoanRepository {
    private loans: Loan[] = loans;

    getAll(): Loan[] {
        return this.loans;
    }

    getById(id: number): Loan | undefined {
        return this.loans.find(loan => loan.id === id);
    }

    getLoansByUserId(userId: number): Loan[] {
        return this.loans.filter(loan => loan.user.id === userId);
    }

    getActiveLoansByUserId(userId: number): Loan[] {
        return this.loans.filter(loan => loan.user.id === userId && !loan.devolvido);
    }

    getReturnedLoansByUserId(userId: number): Loan[] {
        return this.loans.filter(loan => loan.user.id === userId && loan.devolvido);
    }

    add(loan: Loan): void {
        this.loans.push(loan);
    }

    update(id: number, updatedLoan: Loan): void {
        const index = this.loans.findIndex(loan => loan.id === id);
        if (index !== -1) {
            this.loans[index] = updatedLoan;
        }
    }

    delete(id: number): void {
        this.loans = this.loans.filter(loan => loan.id !== id);
    }

    devolverLivro(id: number): void {
        const loan = this.getById(id);
        if (loan && !loan.devolvido) {
            loan.devolvido = true;
            loan.dataDevolucaoReal = new Date();
            loan.multaCalculada = this.calcularMultaNaDevolucao(loan);
            loan.multaPaga = true;
            this.update(id, loan);
        }
    }

    private calcularMultaNaDevolucao(loan: Loan): number {
        if (!loan.dataDevolucaoReal) return 0;
        const diffTime = loan.dataDevolucaoReal.getTime() - loan.dataEmprestimo.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 14 ? diffDays - 14 : 0;
    }

    pagarMulta(id: number): void {
        const loan = this.getById(id);
        if (loan && loan.devolvido && loan.multaCalculada > 0 && !loan.multaPaga) {
            loan.multaPaga = true;
            this.update(id, loan);
        }
    }
}