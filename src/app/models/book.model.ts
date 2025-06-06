export class Book {
    constructor(
        public id: number,
        public titulo: string,
        public autor: string,
        public nota: number,
        public quantidade: number,
        public disponivel: boolean
    ) { }

    verificarDisponibilidade(): boolean {
        return this.disponivel;
    }
}