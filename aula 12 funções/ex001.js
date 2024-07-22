function parimp(n) {
    if (n % 2 == 0) {
        return "par"
    } else {
        return "ímpar"
    }
}

console.log(parimp(7))

/*============================================================*/

function soma(n1=0, n2=0) { /* Aqui determinamos que n1 e n2 recebem zero, para o caso de passarmos apenas o valor de um dos dois. */
    return n1 + n2
}

console.log(soma(2, 5))

/*============================================================*/

let v = function (x){
    return x*2
}

console.log(v(5))

/*============================================================*/

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

/*============================================================*/

