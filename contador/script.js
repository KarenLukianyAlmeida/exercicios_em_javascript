function contar() {
    var txtI = document.getElementById('txtInicio')
    var txtF = document.getElementById('txtFim')
    var txtP = document.getElementById('txtPasso')
    var resposta = document.getElementById('res')
    

    if (txtI.value.length == 0 || txtF.value.length == 0 || txtP.value.length == 0 ) {
        resposta.innerHTML = 'Impossível contar!'
        //alert('[ERRO] Faltam dados')        
    } else {
        resposta.innerHTML = '<p>Contando: </p>'
        var inicio = Number(txtI.value)
        var fim = Number(txtF.value)
        var passo = Number(txtP.value)
        if (passo == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        if (inicio < fim) {
            //Contagem crescente
            for (c = inicio; c <= fim; c+= passo) {
                resposta.innerHTML += `${c} 👉 `
            }   
        } else {
            //Contagem regressiva
            for (c = inicio; c >= fim; c-= passo) {
                resposta.innerHTML += `${c} 👉 `
            }   
        }
        resposta.innerHTML += '🚩'

    }
}


     