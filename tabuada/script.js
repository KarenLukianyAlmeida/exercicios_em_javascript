function gerar_tabuada() {
    var tab = document.getElementById('tabua_completa')
    var txtN = document.getElementById('txt_numero')

    if (txt_numero.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var number = Number(txtN.value)
        tab.innerHTML = ''
        for (c = 1; c<=10; c++) {
            var item = document.createElement('option')
            item.text = `${number} X ${c} = ${number*c} `
            tab.appendChild(item)
        }
    }


}