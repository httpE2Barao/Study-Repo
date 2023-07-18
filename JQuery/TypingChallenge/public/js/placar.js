function inserePlacar() {
  var placar = $('.placar').find('tbody');
  var usuario = 'Elias';
  var palavrasMinuto = $(".contador_palavras").text() * 6
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

function removeLinha() {
  $(this).parent().parent().remove();
}