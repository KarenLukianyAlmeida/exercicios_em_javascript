function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (f_ano.value.length == 0 || Number(f_ano.value) > ano ) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(f_ano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'img/crianca_M.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'img/jovem_M.png')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'img/adulto_M.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso_M.png')
            }
        }else{
            gênero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'img/crianca_F.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'img/jovem_F.png')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'img/adulto_F.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso_F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}