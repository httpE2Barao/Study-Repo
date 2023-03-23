import { Negociacao } from "./negociacao.js";

export class Negociacoes { 
    private negociacoes: Negociacao[] = [];
                    // Array<Negociacao>
    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
        // ReadonlyArray<Negociacao>
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
