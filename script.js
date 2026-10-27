let n1 = 18
let n2 = 222

let resultado = somar(n1, n2)

function somar(n1, n2){
    return n1 + n2
}

console.log(`A soma de ${n1} com ${n2} é ${resultado}`)

let n3 = 30
let n4 = 10

let resultado2 = multiplicar(n3, n4)

function multiplicar(n3, n4){
    return n3 * n4
}

console.log(`A multiplicação de ${n3} por ${n4} é ${resultado2}`)

let n5 = 6
let n6 = 7

let resultado3 = dividir(n5, n6)

function dividir(n5, n6){
    if (n6 === 0) {
        console.log ("Valor é inválido")
    } else return n5 / n6
}

console.log(`A divisão de ${n5} por ${n6} é ${resultado3}`)

let n7 = 34
let n8 = 8

let resultado4 = subtrair(n7,n8)

function subtrair(n7,n8){
    return n7 - n8
}

console.log(`A subtração de ${n7} por ${n8} é ${resultado4}`)

let n9 = 6
let n10 = 4

let resultado5 = potenciar(n9,n10)

function potenciar(n9,n10){
    return n9 ** n10
}

console.log(`Ao elevar ${n9} a ${n10}, o número obtido é ${resultado5}`)