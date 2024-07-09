function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById("iano")
    var res = document.getElementById("res")
    if (nasc.value.lenght == 0 || nasc.value > ano || nasc.value < 1950) {
        window.alert("[ERRO] O ano de Nascimento deve estar entre 1950 e 2024!")
    } else {
        var sexo = document.getElementsByName("sexo")
        var idade = ano - Number(nasc.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (sexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "imagens/menino.png")
            } else if (idade < 18) {
                //adolescente
                img.setAttribute("src", "imagens/jovem.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "imagens/homem.png")
            } else {
                //idoso
                img.setAttribute("src", "imagens/idoso.png")
            }
        } else if (sexo[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "imagens/menina.png")
            } else if (idade < 18) {
                //adolescente
                img.setAttribute("src", "imagens/adolescente.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "imagens/mulher.png")
            } else {
                //idoso
                img.setAttribute("src", "imagens/idosa.png")
            }
        } else {
            window.alert("[ERRO] Um gênero deve ser selecionado para continuar!")
        }
        res.style.textAlign = "center"
        res.innerHTML = `${genero} de ${idade} anos.`
        res.appendChild(img)
        img.style.width = "75%"
    }

}