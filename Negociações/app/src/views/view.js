"use strict";
exports.__esModule = true;
exports.View = void 0;
var View = /** @class */ (function () {
    function View(seletor) {
        var elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error("Seletor " + seletor + " nao existe no DOM. Verifique!");
        }
    }
    View.prototype.update = function (model) {
        var template = this.template(model);
        this.elemento.innerHTML = template;
    };
    return View;
}());
exports.View = View;
