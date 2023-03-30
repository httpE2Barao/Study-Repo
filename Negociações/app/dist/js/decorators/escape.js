export function escape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=escape.js.map