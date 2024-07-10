function contar() {
    var start = document.getElementById("istart")
    var end = document.getElementById("iend")
    var step = document.getElementById("istep")
    var res = document.getElementById("res")

    //Primeiro verificamos se os campos estão vazios
    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        window.alert("[ERRO] Faltam dados para a contagem!")
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contando:"
        //Transformando os valores das variáveis acima em números
        var a = Number(start.value)
        var b = Number(end.value)
        var c = Number(step.value)
        if (c <= 0){
            window.alert("Valor do passe inválido! O valor considerado será 1.")
            c = 1
        }
        if (a < b) {
            //Contagem progressiva
            for(var cont = a; cont <= b; cont += c) {
                res.innerHTML += ` ${cont} \u{27A1}`
            }
        } else {
            //Contagem regressiva
            for(var cont = a; cont >= b; cont -= c) {
                res.innerHTML += ` ${cont} \u{27A1}`
            }
        }
        res.innerHTML += " \u{1F3C1}"        
    }
}