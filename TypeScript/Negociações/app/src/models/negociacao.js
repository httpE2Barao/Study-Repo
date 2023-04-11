"use strict";
exports.__esModule = true;
exports.Negociacao = void 0;
var Negociacao = /** @class */ (function () {
    function Negociacao(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    Negociacao.criaDe = function (dataString, quantidadeString, valorString) {
        var exp = /-/g;
        var date = new Date(dataString.replace(exp, ','));
        var quantidade = parseInt(quantidadeString);
        var valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    };
    Object.defineProperty(Negociacao.prototype, "volume", {
        get: function () {
            return this.quantidade * this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Negociacao.prototype, "data", {
        get: function () {
            var data = new Date(this._data.getTime());
            return data;
        },
        enumerable: false,
        configurable: true
    });
    Negociacao.prototype.paraTexto = function () {
        return "\n        Data: " + this.data + ",\n        Quantidade: " + this.quantidade + ",\n        Valor: " + this.valor + "\n    ";
    };
    Negociacao.prototype.ehIgual = function (negociacao) {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    };
    return Negociacao;
}());
exports.Negociacao = Negociacao;
