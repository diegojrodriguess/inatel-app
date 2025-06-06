export class User {
  constructor(
    public id: number,
    public nome: string,
    public matricula: string,
    public email: string
  ) {}

  realizarEmprestimo(livro: any): void {
    // Implementação fictícia
  }
}