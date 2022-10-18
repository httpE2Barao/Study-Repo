function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('tano')
    var res = document.querySelector('div#res')
    if (fano.value.length === 0 || fano.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('tsex')
        var idade = ano - Number(fano.value)
        
    }
}