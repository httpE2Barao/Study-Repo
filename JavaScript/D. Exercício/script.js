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
        var genero = ''
                            // Variável para a foto
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
                            // Variável para gênero
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 2) {
                img.setAttribute('src', '../../Downloads/js-exercicio-1/bebe-homem.jpg')
            } else if (idade <= 15){
                img.setAttribute('src', '../../Downloads/js-exercicio-1/crianca-menino.jpg')
            } else if (idade < 23){
                img.setAttribute('src', '../../Downloads/js-exercicio-1/jovem-homem.jpg')
            } else if (idade < 50){
                img.setAttribute('src', '../../Downloads/js-exercicio-1/adulto-homem.jpg')
            } else {
                img.setAttribute('src', '../../Downloads/js-exercicio-1/velho-homem.jpg')
            }
        } else if (fsex[2].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 2) {
                img.setAttribute('src', '../../Downloads/js-exercicio-1/bebe-mulher.jpg')
            } else if (idade <= 15){
                img.setAttribute('src', '../../Downloads/js-exercicio-1/crianca-mulher.jpg')
            } else if (idade < 23){
                img.setAttribute('src', '../../Downloads/js-exercicio-1/jovem-mulher.jpg')
            } else if (idade < 50){
                img.setAttribute('src', '../../Downloads/js-exercicio-1/adulto-mulher.jpg')
            } else {
                img.setAttribute('src', '../../Downloads/js-exercicio-1/velho-mulher.jpg')
            }
        } else {
            genero = 'Não Binário'
            if (idade >= 0 && idade <= 2) {
                img.setAttribute('src', '../../Downloads/js-exercicio-1/bebe-nbinario.jpg')
            } else if (idade <= 15){
                img.setAttribute('src', '../../Downloads/js-exercicio-1/crianca-nbinario.jpg')
            } else if (idade < 23){
                img.setAttribute('src', '../../Downloads/js-exercicio-1/jovem-nbinario.jpg')
            } else if (idade < 50){
                img.setAttribute('src', '../../Downloads/js-exercicio-1/adulto-nbinario.jpg')
            } else {
                img.setAttribute('src', '../../Downloads/js-exercicio-1/velho-nbinario.jpg')
            }
        }
                            // Resultado
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}