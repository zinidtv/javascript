function gerar() {
    var num = document.getElementById("inum")
    var tab = document.getElementById("seltab")

    if (num.value.length == 0) {
        window.alert("[ERRO] Por favor, digite um número maior do que 0!")
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            var item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}