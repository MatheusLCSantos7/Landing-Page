function verificar()
{
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')

if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente')
} 
else
{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) 
    {
        genero = 'homem'
        if (idade >=0 && idade <16) 
        {
         genero = ' uma criança'
         img.setAttribute('src', '1.png')
        }
       else if (idade <45) 
        {
            genero = ' um adulto'
         img.setAttribute('src', '3.png')
        }else
        {  
            genero = ' um idoso'
         img.setAttribute('src', '6.png')
        }
    } else if (fsex[1].checked)
    {
        genero = 'mulher'
        if (idade >=0 && idade <16) 
        {
         genero = ' uma criança'
         img.setAttribute('src', '2.png')
        }else if (idade <45) 
        {
            genero = ' um adulto'
         img.setAttribute('src', '4.png')
        }else
        {
            genero = ' uma idosa'
         img.setAttribute('src', '5.png')
        }
    }
    res.style.textAlign = 'center' // assim que alinha em JAVASCRIPT
    res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos!`
    res.appendChild(img)
}
}