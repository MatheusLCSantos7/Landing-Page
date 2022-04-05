function carregar()
{
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas!`

if (hora >= 0 && hora < 12)
{
    img.src = 'manhã.png'
    document.body.style.background = 'rgb(66, 154, 212)'
} else if (hora >= 12 && hora < 18)
{
    img.src = 'tarde.png'
    document.body.style.background = 'rgb(218, 120, 55)'
} else 
{
    img.src = 'noite(250 x 250 px).png'
    document.body.style.background = 'rgba(252, 4, 4, 0.596)'
}

}