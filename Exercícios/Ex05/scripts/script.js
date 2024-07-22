let num = document.querySelector('input#fnum')
let lista = document.querySelector("select#flista")
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert("[ERRO]Valor inválido ou já encontrado na lista!")
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert("[ERRO]Adicione ao menos um valor para finalizar!")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ""
        res.innerHTML += `<p>Os números informados na lista são: ${valores.sort()}.</p>`
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O menor número da lista é ${menor}.</p>`
        res.innerHTML += `<p>O maior número da lista é ${maior}.</p>`
        res.innerHTML += `<p>A soma dos valores na lista é ${soma}.</p>`
        res.innerHTML += `<p>A média entre os valores na lista é ${media}.</p>`

    }
}