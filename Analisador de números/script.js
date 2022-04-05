let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n)

{
    if (Number(n) >=1 && Number(n) <=100)
    { 
        return true
    } else 
    {
        return false
    }
}

function inlista(n, l)
{
    if(l.indexOf(Number(n)) != -1)
    {
        return true
    } else {
        return false
    }
}

function adicionar()
{
    if(isnumero(num.value) && !inlista(num.value, valores))
    {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} add`
        lista.appendChild(item)
        res.innerHTML = ''   //pra poder limpar o resultado 
    }  
    else{window.alert('VALOR INVALIDO OU JA ENCONTRADO NA LISTA')}

    num.value = ''
    num.focus()  //pra poder ter q clicar o mouse na caixa d enumero

    
}


function finalizar() 
{
    if (valores.length == 0)
    {

        window.alert('Adicione Valores Para começar')

    } else 
    {
        let tot = valores.length // pra saber quantos elementos tem
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores)
        {   
            soma += valores[pos]

            if(valores[pos] > maior)
            
                maior = valores[pos]
            
            if(valores[pos] < menor)
            
                menor = valores[pos]
            
        }

        media = soma/ tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot}  números adicionados</p>` 
        res.innerHTML += `<p>O maior valor informado foi o ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores,temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores adicionados foi ${media}</p>`
    }
}