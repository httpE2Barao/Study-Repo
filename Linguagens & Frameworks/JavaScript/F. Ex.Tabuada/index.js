function tabuada() {
    let num = document.getElementById('tnum')
    let tab = document.getElementById('tabuada')
    if (num.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ('')
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c} `
            tab.appendChild(item)
        }
    }
}