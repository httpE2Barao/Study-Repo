"use strict";
exports.__esModule = true;
exports.NegociacoesServices = void 0;
var negociacao_js_1 = require("../models/negociacao.js");
var NegociacoesServices = /** @class */ (function () {
    function NegociacoesServices() {
    }
    NegociacoesServices.prototype.obterNegociacaoDoDia = function () {
        return fetch('http://3.133.118.212:8080/dados')
            .then(function (res) { return res.json(); })
            .then(function (dados) {
            return dados.map(function (dado) {
                return new negociacao_js_1.Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    };
    return NegociacoesServices;
}());
exports.NegociacoesServices = NegociacoesServices;
