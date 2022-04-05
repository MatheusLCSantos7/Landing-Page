function clicou()
{
var tn1 = window.document.getElementById('txtn')
var res = window.document.getElementById('res')
if (tn1.value.length == 0)
{
    res.innerHTML = 'Impossível contar'
    window.alert('[ERRO] Digite um número')
} else {
    var n1 = Number(tn1.value)
    var c = 1
    res.innerHTML = ''
   while (c <=10) 
   {
    var item = document.createElement('option')
    item.text = `${n1} x ${c} = ${n1*c}`
    item.value = `tab${c}`
    res.appendChild(item)
    c++     
   }
}
} 