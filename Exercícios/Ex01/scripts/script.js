function carregar() {
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("manha")
var data = new Date()
var hora = data.getHours()
var mins = data.getMinutes()

//var hora = 13

msg.innerHTML = `Agora são ${hora}:${mins}h.`

if (hora >= 5 && hora < 12) {
    //bom dia
    img.src = "imagens/manha.png"
    document.body.style.background = "#fcf5eb"
} else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = "imagens/tarde.png"
    document.body.style.background = "#fb9b36"
} else {
    //boa noite
    img.src = "imagens/noite.png"
    document.body.style.background = "#09181d"
}
}