var frase = $(".conteudo").text();
var tamanhoFrase = frase.split(' ').length;
var contadorLetras = $("#contador_letras");

var mostradorFrase = $("#tamanho_frase");

const campo = $(".campo_digitar").on('click', () => {
  console.log(campo)
})

mostradorFrase.text(tamanhoFrase);