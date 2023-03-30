import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', evento => {
        evento.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error ('Nao foi possivel iniciar a aplicacao. Verifique se o form existe!')
}

const mostrarCodigos = document.querySelector('.mostrarCodigos') as HTMLInputElement;
const codigo = document.querySelectorAll('.codigo');

mostrarCodigos.addEventListener('click', evento => {
    evento.preventDefault();
    codigo.forEach(codigo => {
        if (codigo.classList.contains('visible')) {
            codigo.classList.remove('visible');
        } else {
            codigo.classList.add('visible');
        }
    })
})

const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importarDados();
    })
} else {
    throw Error('Botão importa não foi encontrado.')
}