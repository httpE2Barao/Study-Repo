const form = document.querySelector('.adicionar')
const lista = document.querySelector('.lista') 
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach( (elemento) => {
    adicionarItem(elemento)
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    const existe = itens.find( elemento => elemento.nome === nome.value )
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {
        itemAtual
    }

    if (quantidade.value != 0 && quantidade.value < 15) {
        adicionarItem(itemAtual)
    
        itens.push(itemAtual)
    
        localStorage.setItem("itens", JSON.stringify(itens))
    }

    // resetar formulário
    nome.value = ""
    quantidade.value = ""
})

function adicionarItem(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')
    
    const novoNum = document.createElement('strong')
    novoNum.innerHTML = item.quantidade
    novoItem.appendChild(novoNum)

    novoItem.innerHTML += item.nome
    lista.appendChild(novoItem)
}
