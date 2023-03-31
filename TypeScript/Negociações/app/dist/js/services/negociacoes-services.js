import { Negociacao } from "../models/negociacao.js";
export class NegociacoesServices {
    obterNegociacaoDoDia() {
        return fetch('http://3.133.118.212:8080/dados')
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
