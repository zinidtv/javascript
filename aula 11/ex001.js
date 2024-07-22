let num = [5, 9, 3]
var pesq = 10
num[3] = 7 /* Isso serve tanto para acrescentar um valor em um novo índice, quanto para alterar o valor de uma índice existente. */
num.push(1) /* Isso serve para adicionar um valor após o último índice, sem a necessidade de saber exatamente qual é. */

console.log(num)
/* Usando o comando "num.length", vamos retornar o tamano do índice da array. */
console.log(`A array tem ${num.length} posições`)
/* Usando o comando "num[]", vamos retornar o valor dentre de um índice específico, determinado dentro dos colchetes. */
console.log(`O primeiro valor é ${num[0]}`)
/* Usando o comando "num.sort()", vamos retornar os valores de cada índice em ordem. */
console.log(`Exibindo os valores em ordem: ${num.sort()}`)

/* Usando o método "for" para além de exibir o total de posições, qual valor ocupa cada posição da nossa array. */
for(let pos = 0; pos < num.length; pos++) {
    console.log(`Posição ${pos} = ${num[pos]}`)
}

/* Usando um método mais simplificado do acima " for in". Que só funciona para arrays e objetos. */
for(let pos in num){ /* Come ler o que está entre (): VARIÁVEL pos RECEBE num */
    console.log(`Índice ${pos} = ${num[pos]}`)
}

/* Usando o comando "num.indexOf()", vamos retornar qual índice um valor específico está ocupando. */
console.log(`O valor ${pesq} está ocupando o índice ${num.indexOf(pesq)}.`)

/* Usando o "if" para obter o memso resultado acima. */
if (num.indexOf(pesq) == -1) {
    console.log(`O valor ${pesq} não existe`)
} else {
    console.log(`O valor ${pesq} está ocupando o índice ${num.indexOf(pesq)}.`)
}