"use strict";
exports.__esModule = true;
exports.escape = void 0;
function escape(target, propertyKey, descriptor) {
    var metodoOriginal = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var retorno = metodoOriginal.apply(this, args);
        /* if (typeof retorno === 'string') {
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`);
            retorno = retorno
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }*/
        return retorno;
    };
    return descriptor;
}
exports.escape = escape;
