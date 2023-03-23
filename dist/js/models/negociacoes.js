export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // Array<Negociacao>
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray<Negociacao>
    lista() {
        return this.negociacoes;
    }
}
