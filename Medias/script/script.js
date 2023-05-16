let valor1 = document.querySelector('#valor1')
let valor2 = document.querySelector('#valor2')
let valor3 = document.querySelector('#valor3')
let botao = document.querySelector('#botao')

function valor(){
    let a = Number(valor1.value);
    let b = Number(valor2.value);
    let c = Number(valor3.value);
    let d = (a + b + c)/3;
    let e = (a*3 + b*2 + c*5)/3;

    aritmetica.innerHTML = d;
    ponderada.innerHTML = e;
    soma.innerHTML = d + e;
    media.innerHTML = (d + e)/2;
}


botao.onclick = function(){
    valor();
}