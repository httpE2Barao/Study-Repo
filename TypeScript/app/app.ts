import { NegociacaoController } from "./controllers/controller.js";
import { NegociacaoView } from "./views/view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

form.addEventListener('submit', evento => {
    evento.preventDefault();
    controller.adiciona();
});


const mostrarCodigos = document.querySelector('.mostrarCodigos');
const codigo = document.querySelectorAll('.codigo');

mostrarCodigos.addEventListener('click', evento => {
    evento.preventDefault();
    if (mostrarCodigos.classList.contains('visible')) {
        mostrarCodigos.classList.remove('visible');
        codigo.forEach(codigo => {
            codigo.classList.remove('visible');
        })
    } else {
        mostrarCodigos.classList.add('visible');
        codigo.forEach(codigo => {
            codigo.classList.add('visible');
        })
    }
})
