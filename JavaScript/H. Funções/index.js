function parimp(n) {
    if (n%2==0) {
        return'Par!'
    } else {
        return 'Ímpar!'
    }
}
let res = parimp(254)
console.log(`O número é ${res}`)


function soma(n1=0, n2=0) {
    return n1 + n2
} console.log(`O resultado da soma é ${soma(52,45)}`)


let v = function(x) {
    return x**2
} 
console.log(v(10))


        //Tradicional
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
} console.log(fatorial(4))

        //Recursivo
function fatorial2(n) {
    if (n==1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
} console.log(fatorial(5))