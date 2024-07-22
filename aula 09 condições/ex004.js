//No uso da condição multipla (switch), o uso do "break" ao final dos blocos, é obrigatório.

var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var data = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()
var dia = agora.getDay()

switch(dia) {
    case 0:
        dia = ("Domingo")
        break
    case 1:
        dia = ("Segunda-feira")
        break
    case 2:
        dia = ("Terça-feira")
        break
    case 3:
        dia = ("Quarta-feira")
        break
    case 4:
        dia = ("Quinta-feira")
        break
    case 5:
        dia = ("Sexta-feira")
        break
    case 6:
        dia = ("Sábado")
        break
}

console.log(`Agora são ${hora}:${min}h. Do dia ${data}/${mes}/${ano}, ${dia}.`)

if (hora < 6) {
    console.log("Boa madrugada!")
} else if (hora < 12) {
    console.log("Bom dia!")
} else if (hora < 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}