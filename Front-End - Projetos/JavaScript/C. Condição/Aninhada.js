var idade = 20
console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade < 18 || idade > 65) {
        console.log('Voto Opcional')
    } else {
    console.log('Voto Obrigatório')}
}


var agora = new Date()
var hora = agora.getHours()
if (hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora <= 18){
    console.log('Boa tarde!')
} else if (hora > 18 && hora <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}
console.log(`Agora são ${hora} horas.`)