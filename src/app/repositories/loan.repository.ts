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
}