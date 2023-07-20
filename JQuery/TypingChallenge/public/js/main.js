var tempoInicial = parseInt($("#tempo_digitacao").text());
var fraseOriginal = $(".conteudo").html();
var acertos = 0
var erros = 0

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
  var mostradorFrase = $("#tamanho_frase");
  mostradorFrase.text(tamanhoFrase);
}

const campo = $(".campo_digitar");

function inicializadorContadores() {
  var isEspacoPressionado = false;

  campo.on('input', (event) => {
    var conteudo = campo.val();

    var contadorPalavras = conteudo.split(/\S+/).length - 1;
    $(".contador_palavras").text(contadorPalavras);

    var contadorLetras = conteudo.length;
    $(".contador_letras").text(contadorLetras);

    if (isEspacoPressionado) {
      comparador();
      isEspacoPressionado = false;
    }
  });

  campo.on('keydown', (event) => {
    if (event.key === " ") {
      isEspacoPressionado = true;
    }
  });
}

function inicializadorCronometro() {
  var tempoRestante = $("#tempo_digitacao").text();
  campo.one('focus', () => {
    var cronometroID = setInterval(() => {
      tempoRestante--;
      $("#tempo_digitacao").text(tempoRestante);
      campo.attr("");
      if (tempoRestante < 1) {
        clearInterval(cronometroID);
        finalizaJogo();
      }
    }, 1000);
  })
}

function finalizaJogo() {
  campo.attr('disabled', true);
  campo.css('background-color', 'lightgray');
  inserePlacar();
  scrollPlacar();
}

function comparador() {
  var conteudoDigitado = campo.val().trim();
  var novoConteudo = fraseOriginal;
  var acertou = false

  var palavrasFrase = fraseOriginal.split(' ');
  var palavrasDigitadas = conteudoDigitado.split(' ');

  for (var i = 0; i < palavrasFrase.length; i++) {
    var palavraFrase = palavrasFrase[i];
    var palavraDigitada = palavrasDigitadas[i] || "";

    if (palavraDigitada !== "") {
      if (palavraDigitada === palavraFrase) {
        novoConteudo = novoConteudo.replace(palavraFrase, palavraDigitada);
        acertou = true
      } else {
        novoConteudo = novoConteudo.replace(palavraFrase, '<mark>' + palavraDigitada + '</mark>');
        acertou = false
      }
    }
  }
  if (acertou) {
    acertos = acertos + 1
    $('.contador_acertos').text(acertos)
  } else {
    erros = erros + 1
    $('.contador_erros').text(erros)
  }

  $(".conteudo").html(novoConteudo);
}

function reinicializador() {
  campo.attr('disabled', false)
  campo.val('')
  $(".contador_palavras").text('0')
  $(".contador_letras").text('0')
  $("#tempo_digitacao").text(tempoInicial)
  inicializadorCronometro()
  campo.css('background-color', 'white')
  $(".conteudo").text(fraseOriginal)

  acertos = 0
  $('.contador_acertos').text(acertos)
  erros = 0
  $('.contador_erros').text(erros)
}