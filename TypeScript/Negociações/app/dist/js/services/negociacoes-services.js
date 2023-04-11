import { Negociacao } from "../models/negociacao.js";
export class NegociacoesServices {
    obterNegociacaoDoDia() {
        return fetch('https://negociacoes-valores.vercel.app')
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
