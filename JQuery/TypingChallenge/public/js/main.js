var tempoInicial = $("#tempo_digitacao").text()

// $(document).ready(...)
$(() => {
  atualizaTamanho();
  inicializadorContadores();
  inicializadorCronometro();
  $("#btn_reiniciar").click(reinicializador)
})

function atualizaTamanho() {
  var frase = $(".conteudo").text();
  var tamanhoFrase = frase.split(' ').length;
  var contadorLetras = $("#contador_letras");
  var mostradorFrase = $("#tamanho_frase");
  mostradorFrase.text(tamanhoFrase);
}

const campo = $(".campo_digitar");

function inicializadorContadores() {
  campo.on('input', () => {
    var conteudo = campo.val();

    var contadorPalavras = conteudo.split(/\S+/).length - 1;
    $(".contador_palavras").text(contadorPalavras)

    var contadorLetras = conteudo.length;
    $(".contador_letras").text(contadorLetras)
  })
}

function inicializadorCronometro() {
  var tempoRestante = $("#tempo_digitacao").text();
  campo.one('focus', () => {
    var cronometroID = setInterval(() => {
      tempoRestante--;
      $("#tempo_digitacao").text(tempoRestante)
      campo.attr("")
      if (tempoRestante < 1) {
        campo.attr('disabled', true)
        clearInterval(cronometroID)
        campo.css('background-color','lightgray')
      }
    }, 1000);
  })
}

function comparador() {
  
}

function reinicializador() {
  campo.attr('disabled', false)
  campo.val('')
  $(".contador_palavras").text('0')
  $(".contador_letras").text('0')
  $("#tempo_digitacao").text(tempoInicial)
  inicializadorCronometro()
  campo.css('background-color','white')
}