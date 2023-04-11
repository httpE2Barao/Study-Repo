"use strict";
exports.__esModule = true;
var negociacao_controller_js_1 = require("./controllers/negociacao-controller.js");
var controller = new negociacao_controller_js_1.NegociacaoController();
var form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Nao foi possivel iniciar a aplicacao. Verifique se o form existe!');
}
var mostrarCodigos = document.querySelector('.mostrarCodigos');
var codigo = document.querySelectorAll('.codigo');
mostrarCodigos.addEventListener('click', function (evento) {
    evento.preventDefault();
    codigo.forEach(function (codigo) {
        if (codigo.classList.contains('visible')) {
            codigo.classList.remove('visible');
        }
        else {
            codigo.classList.add('visible');
        }
    });
});
var botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', function () {
        controller.importarDados();
    });
}
else {
    throw Error('Botão importa não foi encontrado.');
}
