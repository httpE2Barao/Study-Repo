let valores = [8, 1, 7, 4, 2, 9]

var num = [5,8,4]

num[3] = 9
num.push(6)
num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)


        //Usando for
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

        //Simplificado
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
        //indexOf()
let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

