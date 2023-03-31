import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesServices {
    public obterNegociacaoDoDia(): Promise<Negociacao[]> {
        return fetch('http://3.133.118.212:8080/dados')
        .then(res => res.json())
        .then((dados: NegociacoesDoDia[]) => {
            return dados.map(dado => {
                return new Negociacao(
                    new Date(), 
                    dado.vezes, 
                    dado.montante
                )
            })
        })
    }
}
