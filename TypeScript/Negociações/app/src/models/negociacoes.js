"use strict";
exports.__esModule = true;
exports.Negociacoes = void 0;
var Negociacoes = /** @class */ (function () {
    function Negociacoes() {
        this.negociacoes = [];
    }
    // Array<Negociacao>
    Negociacoes.prototype.adiciona = function (negociacao) {
        this.negociacoes.push(negociacao);
    };
    // ReadonlyArray<Negociacao>
    Negociacoes.prototype.lista = function () {
        return this.negociacoes;
    };
    Negociacoes.prototype.paraTexto = function () {
        return JSON.stringify(this.negociacoes, null, 2);
    };
    Negociacoes.prototype.ehIgual = function (negociacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    };
    return Negociacoes;
}());
exports.Negociacoes = Negociacoes;
