
function clicou()
{ 
let tn1 = window.document.getElementById('num1')
let tn2 = window.document.getElementById('num2')
let tn3 = window.document.getElementById('num3')
let res = window.document.getElementById('res')
if (tn1.value.length == 0 || tn2.value.length == 0 || tn3.value.length == 0)
{
res.innerHTML = 'Impossivel contar'
window.alert('[ERRO] Faltam DADOS')
} else 
{
res.innerHTML = 'contando: '

let t1 = Number(tn1.value)
let t2 = Number(tn2.value)
let t3 = Number(tn3.value)
if (t3 <= 0) 
{
window.alert('Impossivel contar,CONSIDERANDO PASSO 1 !!')
let t3 = 1

}
if (t1 < t2)
{
    for (let c = t1;c <= t2; c += t3)//c += t3 : c = c+t3
        {
            res.innerHTML += `${c} \u{1F449}`
        } 
    }
    else
    {
        for (let c = t1;c >= t2; c -= t3)
        {
            res.innerHTML += `${c} \u{1F449}`
        }
    }


    }


}



