function inserePlacar() {
  var placar = $('.placar').find('tbody');
  var usuario = 'Elias';
  var palavrasMinuto = $(".contador_palavras").text()
  var linha = $("<tr>" +
    "<td>" + usuario + "</td>" +
    "<td>" + palavrasMinuto + "ppm" + "</td>" +
    "<td>" + acertos + "</td>" +
    "<td>" + erros + "</td>" +
    "<td>" + "<a class='botao_remover cursor-pointer'><i class='small material-icons'>delete</i></a>" + "</td>" +
  "</tr>");
  placar.prepend(linha)

  linha.find('.botao_remover').click(removeLinha)
}

function scrollPlacar() {
  var posicaoPlacar = $('.placar').offset().top - $(window).scrollTop() + "px";
  $("html, body").animate({
    scrollTop: posicaoPlacar
  }, 1000);
}


function removeLinha() {
  $(this).parent().parent().fadeOut();
  setTimeout(() => {
    $(this).parent().parent().remove();
  },1000)
}