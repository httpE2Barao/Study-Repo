"use strict";
exports.__esModule = true;
exports.domInjector = void 0;
function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log("Modificando prototype " + target.constructor.name + " e adicionando getter para a propriedade " + propertyKey);
        var elemento;
        var getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log("Buscando elemento do DOM com o seletor " + seletor + " para injetar em " + propertyKey + ".");
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
exports.domInjector = domInjector;
