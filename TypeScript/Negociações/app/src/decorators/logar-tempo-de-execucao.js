"use strict";
exports.__esModule = true;
exports.logarTempoDeExecucao = void 0;
function logarTempoDeExecucao(emSegundos) {
    if (emSegundos === void 0) { emSegundos = false; }
    return function (target, propertyKey, descriptor) {
        var metodoOriginal = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var divisor = 1;
            var unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            var t1 = performance.now();
            // Chamar o método original
            var retorno = metodoOriginal.apply(this, args);
            //
            var t2 = performance.now();
            console.log(propertyKey + ", Tempo de execu\u00E7\u00E3o: " + (t2 - t1) / divisor + " " + unidade + ".");
            retorno;
        };
        return descriptor;
    };
}
exports.logarTempoDeExecucao = logarTempoDeExecucao;
