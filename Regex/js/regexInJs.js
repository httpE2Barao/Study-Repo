var alvo = '11a22b33c';
var exp  = /(\d+\w)/g;
var resultado = null;

// console.log(exp.test(alvo))

while (resultado = exp.exec(alvo)) {
    console.log(resultado);
    console.log(exp.lastIndex);
}